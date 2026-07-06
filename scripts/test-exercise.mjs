#!/usr/bin/env node
import { readdirSync } from 'node:fs';
import { spawn } from 'node:child_process';

const [, , arg, ...rest] = process.argv;

if (!arg) {
  console.error('Uso: npm run test:one -- <numero-ou-nome> [--watch]');
  console.error('Exemplos: npm run test:one -- 33');
  console.error('          npm run test:one -- two-sum');
  process.exit(1);
}

const folders = readdirSync('exercises', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const isNumberQuery = /^\d+$/.test(arg);
const matches = isNumberQuery
  ? folders.filter((name) => name.startsWith(`${arg.padStart(3, '0')}-`))
  : folders.filter((name) => name.includes(arg.toLowerCase()));

if (matches.length === 0) {
  console.error(`Nenhum exercício encontrado para "${arg}".`);
  process.exit(1);
}

if (matches.length > 1) {
  console.error(`Mais de um exercício bate com "${arg}":`);
  matches.forEach((m) => console.error(`  - ${m}`));
  console.error('Seja mais específico.');
  process.exit(1);
}

const target = `exercises/${matches[0]}`;
const watch = rest.includes('--watch');

console.log(`Rodando testes de: ${target}\n`);

const vitestArgs = watch ? [target] : ['run', target];
const child = spawn('npx', ['vitest', ...vitestArgs], { stdio: 'inherit' });

child.on('exit', (code) => process.exit(code ?? 0));
