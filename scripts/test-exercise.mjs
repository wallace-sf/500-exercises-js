#!/usr/bin/env node
import { readdirSync } from 'node:fs';
import { spawn } from 'node:child_process';

const [, , arg, ...rest] = process.argv;

if (!arg) {
  console.error('Usage: npm run test:one -- <number-or-name> [--watch]');
  console.error('Examples: npm run test:one -- 33');
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
  console.error(`No exercise found for "${arg}".`);
  process.exit(1);
}

if (matches.length > 1) {
  console.error(`More than one exercise matches "${arg}":`);
  matches.forEach((m) => console.error(`  - ${m}`));
  console.error('Be more specific.');
  process.exit(1);
}

const target = `exercises/${matches[0]}`;
const watch = rest.includes('--watch');

console.log(`Running tests for: ${target}\n`);

const vitestArgs = watch ? [target] : ['run', target];
const child = spawn('npx', ['vitest', ...vitestArgs], { stdio: 'inherit' });

child.on('exit', (code) => process.exit(code ?? 0));
