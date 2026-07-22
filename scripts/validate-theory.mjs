#!/usr/bin/env node
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const argv = process.argv.slice(2);

let cliBin = 'claude';
const cliFlagIndex = argv.indexOf('--cli');
if (cliFlagIndex !== -1) {
  cliBin = argv[cliFlagIndex + 1];
  if (!cliBin) {
    console.error('Missing value for --cli.');
    process.exit(1);
  }
  argv.splice(cliFlagIndex, 2);
}

const [query] = argv;

const PLACEHOLDER = 'write your analysis here';

const folders = readdirSync('exercises', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !existsSync(`exercises/${name}/solution.ts`));

if (folders.length === 0) {
  console.error('No theory exercises found in exercises/.');
  process.exit(1);
}

let targets = folders;
if (query) {
  const isNumberQuery = /^\d+$/.test(query);
  targets = isNumberQuery
    ? folders.filter((name) => name.startsWith(`${query.padStart(3, '0')}-`))
    : folders.filter((name) => name.includes(query.toLowerCase()));

  if (targets.length === 0) {
    console.error(`No theory exercise found for "${query}".`);
    process.exit(1);
  }
}

function extractAnswer(readme) {
  const marker = '## Answer';
  const index = readme.indexOf(marker);
  if (index === -1) return '';
  return readme.slice(index + marker.length).trim();
}

function readExpected(name) {
  const answerPath = `exercises/${name}/answer.json`;
  if (!existsSync(answerPath)) return null;
  const { expected } = JSON.parse(readFileSync(answerPath, 'utf-8'));
  return expected ?? null;
}

function extractCode(readme) {
  const match = readme.match(/```js\n([\s\S]*?)```/);
  return match ? match[1].trim() : readme;
}

function normalizeBigO(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\*\*/g, '^')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3');
}

function extractStatedComplexity(answer) {
  const match = answer.match(/O\([^)]*\)/i);
  return match ? match[0] : null;
}

function buildJustificationPrompt(code, answer, expected) {
  return `Given this JavaScript function:

\`\`\`js
${code}
\`\`\`

The correct time complexity is ${expected}. A student answered:

"${answer}"

The stated complexity already matches the reference. Judge only whether the student's justification is technically correct and actually supports ${expected}.
Respond with ONLY a raw JSON object (no markdown fences, no extra text) in this exact shape:
{"correct": true|false, "feedback": "1-2 sentence explanation"}`;
}

function buildFullPrompt(code, answer, expected) {
  const reference = expected
    ? `The expected/reference complexity for this exercise is: ${expected}. Use it as the source of truth.`
    : 'No reference complexity is available; judge based on your own analysis of the code.';

  return `Given this JavaScript function:

\`\`\`js
${code}
\`\`\`

A student answered:

"${answer}"

${reference}

Judge whether the student's stated complexity is correct and whether the justification supports it.
Respond with ONLY a raw JSON object (no markdown fences, no extra text) in this exact shape:
{"correct": true|false, "feedback": "1-2 sentence explanation"}`;
}

let exitCode = 0;

for (const name of targets) {
  const readmePath = `exercises/${name}/README.md`;
  const readme = readFileSync(readmePath, 'utf-8');
  const answer = extractAnswer(readme);

  if (!answer || answer.toLowerCase().includes(PLACEHOLDER)) {
    console.log(`⏭️  ${name}: not answered yet`);
    continue;
  }

  const expected = readExpected(name);
  const stated = extractStatedComplexity(answer);

  if (expected && stated && normalizeBigO(stated) !== normalizeBigO(expected)) {
    console.log(`❌ ${name}: expected ${expected}, but the answer states ${stated}.`);
    exitCode = 1;
    continue;
  }

  const code = extractCode(readme);
  const prompt =
    expected && stated
      ? buildJustificationPrompt(code, answer, expected)
      : buildFullPrompt(code, answer, expected);
  const result = spawnSync(cliBin, ['-p', prompt, '--output-format', 'json'], {
    encoding: 'utf-8',
  });

  if (result.error) {
    console.error(`Failed to run "${cliBin}": ${result.error.message}`);
    console.error('Pass a different binary with --cli <name> if "claude" is not the right one.');
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`❌ ${name}: ${cliBin} exited with code ${result.status}`);
    console.error(result.stderr);
    exitCode = 1;
    continue;
  }

  let verdict;
  try {
    const envelope = JSON.parse(result.stdout);
    verdict = JSON.parse(envelope.result);
  } catch {
    console.error(`❌ ${name}: could not parse response from ${cliBin}`);
    console.error(result.stdout);
    exitCode = 1;
    continue;
  }

  const icon = verdict.correct ? '✅' : '❌';
  console.log(`${icon} ${name}: ${verdict.feedback}`);
  if (!verdict.correct) exitCode = 1;
}

process.exit(exitCode);
