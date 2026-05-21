/**
 * Extract reusable content from a legacy README before rewrite.
 * @param {string} text
 */
export function parseLegacyReadme(text, enriched = false) {
  const examples = enriched
    ? extractSection(text, '3. Examples')
    : extractSection(text, 'Examples');
  const constraints = enriched ? [] : extractBullets(text, 'Constraints');
  const description = extractSection(text, 'Description');
  const jsBlocks =
    examples.match(/```(?:js|javascript|ts|tsx)[\s\S]*?```/gi) ??
    text.match(/```(?:js|javascript|ts|tsx)[\s\S]*?```/gi);

  return {
    description: description?.trim(),
    examples: jsBlocks?.join('\n\n') ?? examples?.trim() ?? '',
    constraints,
  };
}

function extractSection(text, name) {
  const re = new RegExp(`## ${name}\\s*\\n+([\\s\\S]*?)(?=\\n## |$)`, 'i');
  return text.match(re)?.[1]?.trim() ?? '';
}

function extractBullets(text, section) {
  const body = extractSection(text, section);
  if (!body) return [];
  return body
    .split('\n')
    .map((l) => l.replace(/^-\s*/, '').trim())
    .filter((l) => l && !l.startsWith('```'));
}
