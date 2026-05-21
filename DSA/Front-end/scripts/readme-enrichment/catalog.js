import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(__dirname, '..', '..', 'FE-interview.md');

const CATEGORY_MAP = {
  '## JS functions': 'js-functions',
  '## UI coding': 'ui-coding',
  '## Algo coding': 'algo-coding',
};

function toKebabCase(title) {
  return title
    .replace(/\.prototype\./gi, '-prototype-')
    .replace(/[''`]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function parseDifficulty(raw) {
  const m = raw.match(/^(Easy|Medium|Hard)(?:\s+done)?\s+(.+)$/i);
  if (m) return { difficulty: m[1], title: m[2].trim() };
  return { difficulty: 'Medium', title: raw.trim() };
}

export function loadCatalog() {
  const content = fs.readFileSync(SOURCE, 'utf8');
  const map = new Map();
  let category = 'js-functions';

  for (const line of content.split(/\r?\n/)) {
    const cat = CATEGORY_MAP[line.trim()];
    if (cat) {
      category = cat;
      continue;
    }
    const match = line.match(/^- \*\*(.+?)\*\* — (.+)$/);
    if (!match) continue;
    const { difficulty, title } = parseDifficulty(match[1]);
    if (title.length > 60 || /we recommend/i.test(title)) continue;
    const slug = toKebabCase(title);
    if (!slug) continue;
    map.set(`${category}/${slug}`, {
      category,
      slug,
      title,
      difficulty,
      description: match[2].trim(),
    });
  }
  return map;
}
