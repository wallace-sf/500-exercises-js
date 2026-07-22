#!/usr/bin/env node
import { readdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const PROGRESS_PATH = 'scripts/theory-progress.json';
const PLACEHOLDER = 'write your analysis here';

const folders = readdirSync('exercises', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((name) => !existsSync(`exercises/${name}/solution.ts`))
  .sort();

if (folders.length === 0) {
  console.error('No theory exercises found in exercises/.');
  process.exit(1);
}

function extractAnswer(readme) {
  const marker = '## Answer';
  const index = readme.indexOf(marker);
  if (index === -1) return '';
  return readme.slice(index + marker.length).trim();
}

function loadProgress() {
  if (!existsSync(PROGRESS_PATH)) return {};
  return JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));
}

function hashOf(text) {
  return createHash('sha1').update(text).digest('hex');
}

const progress = loadProgress();

let answeredCount = 0;

const rows = folders.map((name) => {
  const readme = readFileSync(`exercises/${name}/README.md`, 'utf-8');
  const answer = extractAnswer(readme);
  const isAnswered = Boolean(answer) && !answer.toLowerCase().includes(PLACEHOLDER);

  if (!progress[name]) progress[name] = { history: [] };
  const history = progress[name].history;

  if (isAnswered) {
    const hash = hashOf(answer);
    const lastEntry = history[history.length - 1];
    if (!lastEntry || lastEntry.hash !== hash) {
      history.push({ timestamp: new Date().toISOString(), hash });
    }
    answeredCount += 1;
  }

  const lastEntry = history[history.length - 1];

  return {
    name,
    answered: isAnswered,
    timesAnswered: history.length,
    lastAnswered: lastEntry ? lastEntry.timestamp : null,
  };
});

writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));

const total = folders.length;
const remaining = total - answeredCount;
const pct = Math.round((answeredCount / total) * 100);

console.log(`Total de perguntas: ${total}`);
console.log(`Respondidas: ${answeredCount} (${pct}%)`);
console.log(`Faltando: ${remaining}`);
console.log('');

const nameWidth = Math.max(...rows.map((r) => r.name.length), 'Exercicio'.length);
const header = `${'Exercicio'.padEnd(nameWidth)} | Respondida? | Vezes respondida | Ultima vez`;
console.log(header);
console.log('-'.repeat(header.length));

for (const row of rows) {
  const answeredLabel = row.answered ? '✅' : '❌';
  const lastAnswered = row.lastAnswered
    ? new Date(row.lastAnswered).toLocaleString('pt-BR')
    : '-';
  console.log(
    `${row.name.padEnd(nameWidth)} | ${answeredLabel.padEnd(11)} | ${String(row.timesAnswered).padEnd(17)} | ${lastAnswered}`
  );
}
