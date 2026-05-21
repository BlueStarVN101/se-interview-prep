export function parseReadme(text) {
  const title = text.match(/^# (.+)$/m)?.[1]?.trim() ?? '';
  const difficulty = text.match(/\*\*Difficulty:\*\*\s*(\w+)/)?.[1] ?? 'Medium';
  const overview = section(text, '1. Problem Overview');
  const functional = bullets(text, 'Functional requirements');
  const constraints = bullets(text, 'Constraints');
  const edgeCases = bullets(text, 'Edge cases to consider');
  const examples = section(text, '3. Examples');
  const uiUseCases = section(text, 'UI Use Cases');
  const interactionRules = section(text, 'Interaction Rules');
  const a11y = section(text, 'Accessibility');

  return {
    title,
    difficulty,
    overview,
    functional,
    constraints,
    edgeCases,
    examples,
    uiUseCases,
    interactionRules,
    a11y,
    hasA11y:
      Boolean(a11y?.trim()) ||
      /aria|keyboard|accessibility|focus/i.test(text),
    hasUiSection: text.includes('## 5. UI Use Cases'),
  };
}

function section(text, name) {
  const re = new RegExp(`## ${name}\\s*\\n+([\\s\\S]*?)(?=\\n## |$)`, 'i');
  return text.match(re)?.[1]?.trim() ?? '';
}

function bullets(text, heading) {
  const body = section(text, `2. Requirements`) || text;
  const re = new RegExp(
    `### ${heading}\\s*\\n+([\\s\\S]*?)(?=\\n### |\\n## |$)`,
    'i',
  );
  const block = body.match(re)?.[1] ?? '';
  return block
    .split('\n')
    .map((l) => l.replace(/^-\s*/, '').trim())
    .filter((l) => l && !l.startsWith('```'));
}
