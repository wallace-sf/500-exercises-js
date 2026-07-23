#!/usr/bin/env node
import { readdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const PROGRESS_PATH = 'scripts/progress.json';
const PLACEHOLDER = 'write your analysis here';
const STUB_PATTERN = /throw new Error\(\s*['"]not implemented['"]\s*\)/;

const allFolders = readdirSync('exercises', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const theoryFolders = allFolders.filter((name) => !existsSync(`exercises/${name}/solution.ts`));
const codingFolders = allFolders.filter((name) => existsSync(`exercises/${name}/solution.ts`));

function extractAnswer(readme) {
  const marker = '## Answer';
  const index = readme.indexOf(marker);
  if (index === -1) return '';
  return readme.slice(index + marker.length).trim();
}

function extractStatedComplexity(answer) {
  const match = answer.match(/O\([^)]*\)/i);
  return match ? match[0] : null;
}

function normalizeBigO(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\*\*/g, '^')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3');
}

function readExpected(name) {
  const answerPath = `exercises/${name}/answer.json`;
  if (!existsSync(answerPath)) return null;
  const { expected } = JSON.parse(readFileSync(answerPath, 'utf-8'));
  return expected ?? null;
}

function loadProgress() {
  if (!existsSync(PROGRESS_PATH)) return {};
  return JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));
}

function hashOf(text) {
  return createHash('sha1').update(text).digest('hex');
}

function runVitestJson() {
  const result = spawnSync('npx', ['vitest', 'run', '--reporter=json'], {
    encoding: 'utf-8',
    maxBuffer: 1024 * 1024 * 64,
  });
  const report = JSON.parse(result.stdout);
  const byFolder = new Map();
  for (const fileResult of report.testResults) {
    const match = fileResult.name.match(/exercises\/([^/]+)\/solution\.test\.ts$/);
    if (!match) continue;
    byFolder.set(match[1], fileResult.status === 'passed');
  }
  return byFolder;
}

const progress = loadProgress();

function track(name, contentKey, isAnswered) {
  if (!progress[name]) progress[name] = { history: [] };
  const history = progress[name].history;
  if (isAnswered) {
    const hash = hashOf(contentKey);
    const lastEntry = history[history.length - 1];
    if (!lastEntry || lastEntry.hash !== hash) {
      history.push({ timestamp: new Date().toISOString(), hash });
    }
  }
  const lastEntry = history[history.length - 1];
  return {
    timesAnswered: history.length,
    lastAnswered: lastEntry ? lastEntry.timestamp : null,
  };
}

const rows = [];

for (const name of theoryFolders) {
  const readme = readFileSync(`exercises/${name}/README.md`, 'utf-8');
  const answer = extractAnswer(readme);
  const answered = Boolean(answer) && !answer.toLowerCase().includes(PLACEHOLDER);

  let correct = false;
  if (answered) {
    const expected = readExpected(name);
    const stated = extractStatedComplexity(answer);
    correct = Boolean(expected && stated && normalizeBigO(stated) === normalizeBigO(expected));
  }

  const { timesAnswered, lastAnswered } = track(name, answer, answered);
  rows.push({ name, type: 'theory', answered, correct, timesAnswered, lastAnswered });
}

const testResults = runVitestJson();

for (const name of codingFolders) {
  const solution = readFileSync(`exercises/${name}/solution.ts`, 'utf-8');
  const answered = !STUB_PATTERN.test(solution);
  const testPassed = testResults.get(name) ?? false;
  const correct = answered && testPassed;

  const { timesAnswered, lastAnswered } = track(name, solution, answered);
  rows.push({ name, type: 'coding', answered, correct, timesAnswered, lastAnswered });
}

writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));

rows.sort((a, b) => a.name.localeCompare(b.name));

const total = rows.length;
const answeredCount = rows.filter((r) => r.answered).length;
const correctCount = rows.filter((r) => r.correct).length;
const remaining = total - answeredCount;

console.log(`Total de exercicios: ${total}`);
console.log(`Respondidos: ${answeredCount} (${Math.round((answeredCount / total) * 100)}%)`);
console.log(`Corretos: ${correctCount} (${Math.round((correctCount / total) * 100)}%)`);
console.log(`Faltando: ${remaining}`);
console.log('');

const nameWidth = Math.max(...rows.map((r) => r.name.length), 'Exercicio'.length);
const header = `${'Exercicio'.padEnd(nameWidth)} | Tipo    | Respondido | Correto | Vezes | Ultima vez`;
console.log(header);
console.log('-'.repeat(header.length));

for (const row of rows) {
  const answeredLabel = row.answered ? '✅' : '❌';
  const correctLabel = row.correct ? '✅' : '❌';
  const lastAnswered = row.lastAnswered
    ? new Date(row.lastAnswered).toLocaleString('pt-BR')
    : '-';
  console.log(
    `${row.name.padEnd(nameWidth)} | ${row.type.padEnd(7)} | ${answeredLabel.padEnd(10)} | ${correctLabel.padEnd(7)} | ${String(row.timesAnswered).padEnd(5)} | ${lastAnswered}`
  );
}
