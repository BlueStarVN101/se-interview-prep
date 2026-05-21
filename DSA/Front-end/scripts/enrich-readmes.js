import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCatalog } from './readme-enrichment/catalog.js';
import { buildReadme } from './readme-enrichment/build-readme.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EXERCISES = path.join(ROOT, 'exercises');

function parseExistingReadme(text) {
  const title = text.match(/^# (.+)$/m)?.[1];
  const difficulty = text.match(/\*\*Difficulty:\*\*\s*(\w+)/)?.[1];
  const category = text.match(/\*\*Category:\*\*\s*(.+)/)?.[1]?.trim();
  const desc =
    text.match(/## Description\s*\n+([\s\S]*?)(?=\n## |\n---|\n\*\*|$)/)?.[1]?.trim() ||
    text.match(/## 1\. Problem Overview\s*\n+([\s\S]*?)(?=\n## 2\.)/)?.[1]?.trim();
  return { title, difficulty, description: desc };
}

function walkExercises(dir, catalog, updated, missing) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    const rel = path.relative(EXERCISES, full).replace(/\\/g, '/');

    if (fs.existsSync(path.join(full, 'index.js'))) {
      const readmePath = path.join(full, 'README.md');
      if (!fs.existsSync(readmePath)) {
        missing.push(rel);
        continue;
      }

      const key = rel;
      const catalogMeta = catalog.get(key);
      const existing = fs.readFileSync(readmePath, 'utf8');
      const parsed = parseExistingReadme(existing);

      const meta = catalogMeta ?? {
        category: rel.split('/')[0],
        slug: rel.split('/')[1],
        title: parsed.title ?? entry.name,
        difficulty: parsed.difficulty ?? 'Medium',
        description:
          parsed.description ??
          existing.split('\n').find((l) => l.length > 20 && !l.startsWith('#')) ??
          'See tests for requirements.',
      };

      if (!catalogMeta && parsed.description) {
        meta.description = parsed.description;
      }

      fs.writeFileSync(readmePath, buildReadme(meta), 'utf8');
      updated.push(rel);
    } else {
      const category = path.relative(EXERCISES, full).split(path.sep)[0];
      if (['js-functions', 'ui-coding', 'algo-coding'].includes(entry.name) || !category) {
        walkExercises(full, catalog, updated, missing);
      }
    }
  }
}

function main() {
  const catalog = loadCatalog();
  const updated = [];
  const missing = [];

  for (const category of ['js-functions', 'ui-coding', 'algo-coding']) {
    const dir = path.join(EXERCISES, category);
    if (!fs.existsSync(dir)) continue;
    for (const slug of fs.readdirSync(dir)) {
      const exerciseDir = path.join(dir, slug);
      if (!fs.statSync(exerciseDir).isDirectory()) continue;
      const key = `${category}/${slug}`;
      const readmePath = path.join(exerciseDir, 'README.md');
      if (!fs.existsSync(readmePath)) {
        missing.push(key);
        continue;
      }

      const catalogMeta = catalog.get(key);
      const existing = fs.readFileSync(readmePath, 'utf8');
      const parsed = parseExistingReadme(existing);

      const meta = {
        category,
        slug,
        title: catalogMeta?.title ?? parsed.title ?? slug,
        difficulty: catalogMeta?.difficulty ?? parsed.difficulty ?? 'Medium',
        description:
          catalogMeta?.description ??
          parsed.description ??
          'Implement the behavior described in the tests.',
      };

      fs.writeFileSync(readmePath, buildReadme(meta, existing), 'utf8');
      updated.push(key);
    }
  }

  console.log(`Enriched ${updated.length} README files.`);
  if (missing.length) console.log(`Missing README: ${missing.length}`);
}

main();
