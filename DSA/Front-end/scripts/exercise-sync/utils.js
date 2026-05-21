export function toCamelCase(slug) {
  return slug
    .split('-')
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('');
}

export function toPascalCase(slug) {
  const c = toCamelCase(slug);
  return c.charAt(0).toUpperCase() + c.slice(1);
}

export function exportName(slug, category) {
  if (category === 'ui-coding') return toPascalCase(slug);
  if (slug.startsWith('use')) {
    if (!slug.includes('-') && slug.length > 3) {
      const rest = slug.slice(3);
      return `use${rest.charAt(0).toUpperCase()}${rest.slice(1)}`;
    }
    return toCamelCase(slug);
  }
  if (slug.includes('-prototype-')) {
    const part = slug.split('-prototype-')[1];
    return part || toCamelCase(slug);
  }
  return toCamelCase(slug);
}

export function isClassExercise(slug, title) {
  return (
    /^(singleton|turtle|event-emitter|backbone-model|heap|queue|stack|linked-list|binary-tree|binary-search-tree|word-finder)$/.test(
      slug,
    ) ||
    /\bclass\b/i.test(title) ||
    slug.endsWith('-emitter')
  );
}

export function isHook(slug) {
  return slug.startsWith('use');
}

export function parseExamplePairs(examples) {
  const pairs = [];
  for (const line of examples.split('\n')) {
    const m = line.match(/Input:\s*`([^`]+)`\s*→\s*[`']?([^`'\n]+)/i);
    if (m) pairs.push({ input: m[1], output: m[2].trim() });
    const m2 = line.match(/^(.+?)\s*→\s*(.+)$/);
    if (m2 && !m) pairs.push({ input: m2[1].trim(), output: m2[2].trim() });
  }
  const js = examples.match(/```js\n([\s\S]*?)```/);
  if (js) pairs.push({ code: js[1].trim() });
  return pairs;
}
