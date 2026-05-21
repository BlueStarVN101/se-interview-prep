/** Rich per-slug additions keyed by `category/slug` or slug for any category */

/** @type {Record<string, Partial<import('./families.js').EnrichResult>>} */
export const OVERRIDES = {
  'js-functions/flatten': {
    functional: [
      'Recursively flatten nested arrays to depth 1.',
      'Preserve element order left-to-right.',
    ],
    examples:
      'Input: `[1, [2, [3]], 4]` → Output: `[1, 2, 3, 4]`\nInput: `[[[1]]]` → Output: `[1]`',
    edgeCases: ['Already flat array', 'Empty nested arrays', 'Non-array elements at leaves'],
  },
  'js-functions/promise-all': {
    functional: [
      'Resolve with an array of results in input order when all promises fulfill.',
      'Reject with the first rejection reason; other results may be ignored.',
    ],
    examples:
      'Input: `[Promise.resolve(1), Promise.resolve(2)]` → `[1, 2]`\nIf any rejects → rejected promise with that reason.',
    edgeCases: ['Empty iterable resolves to `[]`', 'Non-promise values treated as fulfilled values per spec'],
  },
  'js-functions/throttle': {
    examples:
      'Calls every 100ms max: burst of 10 calls in 50ms → ~1 execution, then possibly trailing call.',
  },
  'js-functions/deep-clone': {
    edgeCases: ['Nested objects/arrays', 'Dates/RegExp if tests include them', 'Circular refs if disallowed'],
    notes: ['JSON parse/stringify only works for JSON-serializable data — confirm test scope.'],
  },
  'js-functions/deep-equal': {
    edgeCases: ['`NaN` handling', 'Different key order in objects', 'Prototype chain ignored or not'],
  },
  'js-functions/memoize': {
    functional: ['Cache results by single serializable/primitive argument key.'],
    edgeCases: ['Same arg returns cached value without re-invoking fn', 'Cache growth unbounded'],
  },
  'js-functions/event-emitter': {
    functional: [
      'Support `on`, `off`, `emit` (and `once` if required).',
      'Listeners run in registration order unless spec differs.',
    ],
    edgeCases: ['Emit with no listeners', 'Removing listener during emit', 'Duplicate handlers'],
  },
  'js-functions/curry': {
    examples:
      'Curried add: `const add = curry((a,b,c) => a+b+c); add(1)(2)(3) === 6`',
    notes: ['Clarify arity detection vs manual arity argument in follow-ups.'],
  },
  'algo-coding/balanced-brackets': {
    functional: [
      'Return whether brackets `()`, `[]`, `{}` are properly nested and closed.',
      'Typically ignore non-bracket characters unless tests say otherwise.',
    ],
    constraints: ['O(n) time; O(n) extra space for the stack in the typical solution.'],
    examples:
      'Input: `"({[]})"` → `true`\nInput: `"([)]"` → `false`',
    edgeCases: ['Empty string', 'Only open brackets', 'Mismatched closing type'],
    notes: ['Classic stack problem — push opens, pop and match on closes.'],
  },
  'algo-coding/binary-search': {
    functional: ['Find index of target in sorted array or return -1 / insertion index per tests.'],
    examples: 'Input: `nums = [-1,0,3,5,9], target = 9` → index `4`',
    notes: ['Use `left + (right-left)/2` mid to avoid overflow.'],
  },
  'algo-coding/stack': {
    functional: ['Implement push, pop, peek/top, isEmpty with O(1) amortized operations.'],
  },
  'algo-coding/linked-list-reversal': {
    examples: 'Input: `1→2→3→null` → `3→2→1→null`',
    notes: ['Iterative three-pointer approach is preferred in interviews.'],
  },
  'algo-coding/maximum-sum-in-contiguous-array': {
    notes: ["Kadane's algorithm — track current and global max while scanning."],
  },
  'algo-coding/two-sum': {},
  'ui-coding/todo-list': {
    functional: [
      'Add tasks via input + submit.',
      'List tasks with delete control per row.',
      'Keep list in client state; no full reload.',
    ],
    examples: 'Type "Walk dog" → Add → row appears with delete icon → delete removes row.',
  },
  'ui-coding/tabs': {
    examples: 'Three tabs → clicking "Settings" shows settings panel only.',
  },
  'ui-coding/counter': {
    functional: ['Increment count on each button press; display current count.'],
    examples: 'Count 0 → click + → shows 1.',
  },
};

/**
 * @param {string} key category/slug
 * @param {object} content enrich result
 */
export function mergeOverride(key, content) {
  const patch = OVERRIDES[key] || OVERRIDES[key.split('/')[1]];
  if (!patch) return content;
  return {
    ...content,
    functional: uniq([...(patch.functional ?? []), ...content.functional]),
    constraints: uniq([...(patch.constraints ?? []), ...content.constraints]),
    edgeCases: uniq([...(patch.edgeCases ?? []), ...content.edgeCases]),
    examples: patch.examples || content.examples,
    notes: uniq([...(patch.notes ?? []), ...content.notes]),
    ui: patch.ui ? { ...content.ui, ...patch.ui } : content.ui,
  };
}

function uniq(arr) {
  return [...new Set(arr)];
}
