import { enrichExercise } from './families.js';
import { parseLegacyReadme } from './parse-existing.js';

const CATEGORY_LABEL = {
  'js-functions': 'js functions',
  'ui-coding': 'ui coding',
  'algo-coding': 'algo coding',
};

const RUNNABLE = {
  'js-functions': 'Node.js (Vitest)',
  'algo-coding': 'Node.js (Vitest)',
  'ui-coding':
    'UI — implement in your preferred stack; enable Vitest when ready',
};

/**
 * @param {{ category: string, slug: string, title: string, difficulty: string, description: string }} meta
 */
export function buildReadme(meta, legacyText = '') {
  let content = enrichExercise(meta);
  if (legacyText) {
    const alreadyEnriched = legacyText.includes('## 1. Problem Overview');
    const legacy = parseLegacyReadme(legacyText, alreadyEnriched);

    if (
      !alreadyEnriched &&
      legacy.description &&
      !meta.description.includes(legacy.description.slice(0, 40))
    ) {
      content = {
        ...content,
        overview: `${content.overview}\n\n_Original summary:_ ${legacy.description}`,
      };
    }
    if (legacy.examples && hasCodeSample(legacy.examples)) {
      content = { ...content, examples: legacy.examples };
    }
    if (!alreadyEnriched && legacy.constraints.length) {
      content = {
        ...content,
        constraints: [...new Set([...legacy.constraints, ...content.constraints])],
      };
    }
  }
  const categoryLabel = CATEGORY_LABEL[meta.category] ?? meta.category;
  const runnable = RUNNABLE[meta.category] ?? 'Local';
  const testCmd = `npm run test:exercise -- ${meta.category}/${meta.slug}`;

  const lines = [
    `# ${meta.title}`,
    '',
    `**Difficulty:** ${meta.difficulty}  `,
    `**Category:** ${categoryLabel}  `,
    `**Runnable in:** ${runnable}`,
    '',
    '## 1. Problem Overview',
    '',
    content.overview,
    '',
    '## 2. Requirements',
    '',
    '### Functional requirements',
    '',
    ...bulletList(content.functional),
    '',
    '### Constraints',
    '',
    ...bulletList(content.constraints),
    '',
    '### Edge cases to consider',
    '',
    ...bulletList(content.edgeCases),
    '',
    '## 3. Examples',
    '',
    content.examples,
    '',
    '## 4. Implementation Notes',
    '',
    ...bulletList(content.notes),
  ];

  if (content.ui) {
    lines.push(
      '',
      '## 5. UI Use Cases & Interactions',
      '',
      '### UI Use Cases',
      '',
      content.ui.useCases,
      '',
      '### Interaction Rules',
      '',
      content.ui.rules,
      '',
      '### Accessibility (if applicable)',
      '',
      content.ui.a11y,
    );
  }

  lines.push(
    '',
    '## How to verify',
    '',
    'Implement in `index.js`. Tests live in `index.test.js`.',
    '',
    '```bash',
    testCmd,
    '```',
  );

  return lines.join('\n');
}

/** @param {string[]} items */
function bulletList(items) {
  return items.map((item) => `- ${item}`);
}

function hasCodeSample(text) {
  return /```(js|javascript|ts|tsx)\b/i.test(text) || /→|Output:/i.test(text);
}
