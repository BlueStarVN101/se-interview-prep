import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCatalog } from './readme-enrichment/catalog.js';
import { parseReadme } from './exercise-sync/parse-readme.js';
import { buildSpec } from './exercise-sync/families.js';
import { buildIndex, buildTests } from './exercise-sync/writers.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EXERCISES = path.join(ROOT, 'exercises');

function main() {
  const catalog = loadCatalog();
  let count = 0;

  for (const [key, meta] of catalog) {
    const dir = path.join(EXERCISES, meta.category, meta.slug);
    const readmePath = path.join(dir, 'README.md');
    if (!fs.existsSync(readmePath)) continue;

    const readme = parseReadme(fs.readFileSync(readmePath, 'utf8'));
    const spec = buildSpec(key, readme, meta);
    spec.describeTitle = meta.title;

    fs.writeFileSync(path.join(dir, 'index.js'), buildIndex(spec), 'utf8');
    fs.writeFileSync(path.join(dir, 'index.test.js'), buildTests(spec), 'utf8');
    count += 1;
  }

  for (const category of ['js-functions', 'ui-coding', 'algo-coding']) {
    const catDir = path.join(EXERCISES, category);
    if (!fs.existsSync(catDir)) continue;
    for (const slug of fs.readdirSync(catDir)) {
      const key = `${category}/${slug}`;
      if (catalog.has(key)) continue;
      const dir = path.join(catDir, slug);
      const readmePath = path.join(dir, 'README.md');
      if (!fs.existsSync(readmePath)) continue;
      const readme = parseReadme(fs.readFileSync(readmePath, 'utf8'));
      const meta = { category, slug, title: readme.title || slug, description: '' };
      const spec = buildSpec(key, readme, meta);
      spec.describeTitle = meta.title;
      fs.writeFileSync(path.join(dir, 'index.js'), buildIndex(spec), 'utf8');
      fs.writeFileSync(path.join(dir, 'index.test.js'), buildTests(spec), 'utf8');
      count += 1;
    }
  }

  console.log(`Synced index.js and index.test.js for ${count} exercises.`);
}

main();
