import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'FE-interview.md');
const EXERCISES = path.join(ROOT, 'exercises');

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

function toCamelCase(slug) {
  return slug
    .split('-')
    .map((part, i) =>
      i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join('');
}

function toPascalCase(slug) {
  const camel = toCamelCase(slug);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function parseDifficulty(raw) {
  const m = raw.match(/^(Easy|Medium|Hard)(?:\s+done)?\s+(.+)$/i);
  if (m) return { difficulty: m[1], title: m[2].trim() };
  return { difficulty: 'Medium', title: raw.trim() };
}

function parseMarkdown(content) {
  const lines = content.split(/\r?\n/);
  let category = 'js-functions';
  const items = [];

  for (const line of lines) {
    const cat = CATEGORY_MAP[line.trim()];
    if (cat) {
      category = cat;
      continue;
    }

    const match = line.match(/^- \*\*(.+?)\*\* — (.+)$/);
    if (!match) continue;

    const { difficulty, title } = parseDifficulty(match[1]);
    const description = match[2].trim();
    const slug = toKebabCase(title);

    if (!slug || slug.length < 2) continue;
    if (title.length > 60 || /we recommend/i.test(title)) continue;

    items.push({ category, difficulty, title, description, slug });
  }

  return items;
}

function defaultExportName(slug, category) {
  if (category === 'ui-coding') return 'App';
  if (slug.includes('prototype')) {
    const part = slug.split('-prototype-')[1];
    return part ? part.charAt(0).toUpperCase() + part.slice(1) : toPascalCase(slug);
  }
  if (/^(use|get|is|make|from|in|once|sleep|mean|sum|chunk|compact|fill|range|clamp)/.test(slug)) {
    return toCamelCase(slug);
  }
  return toCamelCase(slug);
}

function buildReadme({ difficulty, title, description, slug, category }) {
  const runnable =
    category === 'js-functions' || category === 'algo-coding'
      ? 'Node.js (Vitest)'
      : 'UI — implement in your preferred stack; tests are placeholders until you add a runner';

  return `# ${title}

**Difficulty:** ${difficulty}  
**Category:** ${category.replace(/-/g, ' ')}  
**Runnable in:** ${runnable}

## Description

${description}

## Files

- \`index.js\` — implement your solution here
- \`index.test.js\` — automated tests (should pass when done)

## Run tests for this exercise

\`\`\`bash
npm run test:exercise -- ${category}/${slug}
\`\`\`
`;
}

function buildIndexJs({ slug, exportName, category }) {
  if (category === 'ui-coding') {
    return `/**
 * UI exercise: ${slug}
 * Implement the component described in README.md.
 * Export a factory or pure helpers here if you want Vitest coverage without a browser.
 */

export function ${exportName}() {
  // TODO: implement
  throw new Error('Not implemented');
}
`;
  }

  return `/**
 * ${slug}
 * @see README.md
 */

export function ${exportName}(/* ...args */) {
  // TODO: implement
  throw new Error('Not implemented');
}
`;
}

function buildTestJs({ slug, exportName, category, difficulty }) {
  const importPath = './index.js';

  if (category === 'ui-coding') {
    return `import { describe, it, expect } from 'vitest';
import { ${exportName} } from '${importPath}';

describe.skip('${slug} (UI — enable when implemented)', () => {
  it('placeholder — replace with real tests', () => {
    expect(${exportName}).toBeDefined();
  });
});
`;
  }

  return `import { describe, it, expect } from 'vitest';
import { ${exportName} } from '${importPath}';

describe('${slug}', () => {
  it('fails until implemented', () => {
    expect(() => ${exportName}()).toThrow('Not implemented');
  });

  // TODO: add tests that match README requirements (${difficulty})
});
`;
}

function writeFileIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

function main() {
  const content = fs.readFileSync(SOURCE, 'utf8');
  const items = parseMarkdown(content);
  let created = 0;
  let skipped = 0;

  for (const item of items) {
    const dir = path.join(EXERCISES, item.category, item.slug);
    const exportName = defaultExportName(item.slug, item.category);

    const readme = buildReadme(item);
    const indexJs = buildIndexJs({ ...item, exportName });
    const testJs = buildTestJs({ ...item, exportName });

    const a = writeFileIfMissing(path.join(dir, 'README.md'), readme);
    const b = writeFileIfMissing(path.join(dir, 'index.js'), indexJs);
    const c = writeFileIfMissing(path.join(dir, 'index.test.js'), testJs);

    if (a || b || c) created += 1;
    else skipped += 1;
  }

  console.log(`Parsed ${items.length} exercises.`);
  console.log(`Created or updated folders: ${created}, skipped (already exist): ${skipped}`);
}

main();
