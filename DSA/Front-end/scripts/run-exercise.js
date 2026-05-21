import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EXERCISES = path.join(ROOT, 'exercises');

const arg = process.argv[2];

if (!arg) {
  console.error('Usage: npm run test:exercise -- <category>/<slug>');
  console.error('Example: npm run test:exercise -- js-functions/mean');
  process.exit(1);
}

const normalized = arg.replace(/\\/g, '/').replace(/^exercises\//, '');
const testFile = path.join(EXERCISES, normalized, 'index.test.js');

if (!fs.existsSync(testFile)) {
  console.error(`Test file not found: ${testFile}`);
  console.error('Use format: js-functions/mean');
  process.exit(1);
}

const relativeTest = path.relative(ROOT, testFile).replace(/\\/g, '/');

const result = spawnSync(
  'npx',
  ['vitest', 'run', relativeTest],
  { cwd: ROOT, stdio: 'inherit', shell: true },
);

process.exit(result.status ?? 1);
