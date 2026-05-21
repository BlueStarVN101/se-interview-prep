/** @param {Record<string, object>} target */
export function applyBulkSpecs(target) {
  const fns = {
    compact: {
      params: 'arr',
      jsdoc: ['@param {unknown[]} arr', '@returns {unknown[]}'],
      tests: [
        ['expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);'],
        ['expect(compact([])).toEqual([]);'],
      ],
    },
    chunk: {
      params: 'arr, size',
      jsdoc: ['@param {unknown[]} arr', '@param {number} size', '@returns {unknown[][]}'],
      tests: [
        ['expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);'],
        ['expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);'],
      ],
    },
    'unique-array': {
      params: 'arr',
      jsdoc: ['@param {unknown[]} arr', '@returns {unknown[]}'],
      tests: [['expect(uniqueArray([1, 2, 1, 3])).toEqual([1, 2, 3]);']],
    },
    once: {
      params: 'fn',
      jsdoc: ['@param {(...args: unknown[]) => unknown} fn', '@returns {(...args: unknown[]) => unknown}'],
      tests: [
        [
          'const fn = vi.fn((x) => x);',
          'const wrapped = once(fn);',
          'expect(wrapped(1)).toBe(1);',
          'expect(wrapped(2)).toBe(1);',
          'expect(fn).toHaveBeenCalledTimes(1);',
        ],
      ],
    },
    range: {
      params: 'start, end, step = 1',
      jsdoc: ['@param {number} start', '@param {number} end', '@param {number} [step]', '@returns {number[]}'],
      tests: [['expect(range(1, 5)).toEqual([1, 2, 3, 4]);']],
    },
    get: {
      params: 'object, path, defaultValue',
      jsdoc: ['@param {object} object', '@param {string} path', '@param {unknown} [defaultValue]', '@returns {unknown}'],
      tests: [
        ['expect(get({ a: { b: 1 } }, "a.b")).toBe(1);'],
        ['expect(get({ a: 1 }, "a.c", "fallback")).toBe("fallback");'],
      ],
    },
    'in-range': {
      params: 'num, start, end',
      jsdoc: ['@param {number} num', '@param {number} start', '@param {number} end', '@returns {boolean}'],
      tests: [
        ['expect(inRange(5, 1, 10)).toBe(true);'],
        ['expect(inRange(10, 1, 10)).toBe(false);'],
      ],
    },
    intersection: {
      params: '...arrays',
      jsdoc: ['@param {unknown[]} ...arrays', '@returns {unknown[]}'],
      tests: [['expect(intersection([1, 2], [2, 3], [2, 4])).toEqual([2]);']],
    },
    difference: {
      params: 'arr, values',
      jsdoc: ['@param {unknown[]} arr', '@param {unknown[]} values', '@returns {unknown[]}'],
      tests: [['expect(difference([1, 2, 3], [2])).toEqual([1, 3]);']],
    },
    sleep: {
      params: 'ms',
      jsdoc: ['@param {number} ms', '@returns {Promise<void>}'],
      tests: [
        [
          'vi.useFakeTimers();',
          'const p = sleep(100);',
          'vi.advanceTimersByTime(100);',
          'await expect(p).resolves.toBeUndefined();',
        ],
      ],
      async: true,
    },
    memoize: {
      params: 'fn',
      jsdoc: ['@param {(arg: unknown) => unknown} fn', '@returns {(arg: unknown) => unknown}'],
      tests: [
        [
          'const fn = vi.fn((x) => x * 2);',
          'const memoized = memoize(fn);',
          'expect(memoized(2)).toBe(4);',
          'expect(memoized(2)).toBe(4);',
          'expect(fn).toHaveBeenCalledTimes(1);',
        ],
      ],
    },
    'deep-clone': {
      params: 'value',
      jsdoc: ['@param {unknown} value', '@returns {unknown}'],
      tests: [
        [
          'const obj = { a: 1, b: { c: 2 } };',
          'const clone = deepClone(obj);',
          'expect(clone).toEqual(obj);',
          'expect(clone).not.toBe(obj);',
          'clone.b.c = 9;',
          'expect(obj.b.c).toBe(2);',
        ],
      ],
    },
    'deep-equal': {
      params: 'a, b',
      jsdoc: ['@param {unknown} a', '@param {unknown} b', '@returns {boolean}'],
      tests: [
        ['expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);'],
        ['expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);'],
      ],
    },
    'array-prototype-map': {
      exportName: 'map',
      params: 'array, callbackFn',
      tests: [['expect(map([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);']],
    },
    'array-prototype-filter': {
      exportName: 'filter',
      params: 'array, callbackFn',
      tests: [['expect(filter([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);']],
    },
    'array-prototype-reduce': {
      exportName: 'reduce',
      params: 'array, callbackFn, initialValue',
      tests: [['expect(reduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);']],
    },
    'function-prototype-bind': {
      exportName: 'bind',
      params: 'fn, thisArg, ...args',
      tests: [
        [
          'function greet(greeting) { return `${greeting} ${this.name}`; }',
          'const bound = bind(greet, { name: "Ada" }, "Hello");',
          'expect(bound()).toBe("Hello Ada");',
        ],
      ],
    },
    'promise-race': {
      exportName: 'promiseRace',
      params: 'iterable',
      tests: [
        [
          'await expect(promiseRace([Promise.resolve(1), new Promise(() => {})])).resolves.toBe(1);',
        ],
      ],
      async: true,
    },
    'promise-any': {
      exportName: 'promiseAny',
      params: 'iterable',
      tests: [
        [
          "const rejected = Promise.reject('a');",
          "rejected.catch(() => {});",
          "await expect(promiseAny([rejected, Promise.resolve(2)])).resolves.toBe(2);",
        ],
      ],
      async: true,
    },
    'string-anagram': {
      params: 'a, b',
      jsdoc: ['@param {string} a', '@param {string} b', '@returns {boolean}'],
      tests: [
        ['expect(stringAnagram("listen", "silent")).toBe(true);'],
        ['expect(stringAnagram("hello", "world")).toBe(false);'],
      ],
    },
    'find-duplicates-in-array': {
      params: 'nums',
      tests: [['expect(findDuplicatesInArray([1, 2, 2, 3])).toBe(true);']],
    },
    'optimal-stock-trading': {
      params: 'prices',
      tests: [['expect(optimalStockTrading([7, 1, 5, 3, 6, 4])).toBe(5);']],
    },
    'staircase-climbing-combinations': {
      params: 'n',
      tests: [
        ['expect(staircaseClimbingCombinations(3)).toBe(3);'],
        ['expect(staircaseClimbingCombinations(1)).toBe(1);'],
      ],
    },
    'binary-tree-maximum-depth': {
      params: 'root',
      tests: [['expect(binaryTreeMaximumDepth(null)).toBe(0);']],
    },
  };

  for (const [slug, cfg] of Object.entries(fns)) {
    const category = slug.includes('prototype') || [
      'compact', 'chunk', 'sleep', 'memoize', 'once', 'range', 'get', 'deep-clone', 'deep-equal',
      'promise-race', 'promise-any', 'intersection', 'difference', 'in-range', 'unique-array',
      'function-prototype-bind',
    ].includes(slug)
      ? 'js-functions'
      : 'algo-coding';

    const exportName = cfg.exportName ?? slug
      .split('-')
      .map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1)))
      .join('')
      .replace(/Prototype./g, '');

    const name =
      cfg.exportName ??
      toExport(slug);

    const key = `${category}/${slug}`;
    if (target[key]) continue;

    target[key] = {
      kind: 'function',
      exportName: name,
      params: cfg.params ?? '...args',
      jsdoc: cfg.jsdoc ?? [`@see README — ${name}`],
      suites: [
        {
          name: 'basic behavior',
          tests: cfg.tests.map((body, i) => ({
            name: cfg.testNames?.[i] ?? `behaves per README (${i + 1})`,
            body,
            async: cfg.async,
            setup: body.some((l) => l.includes('useFakeTimers')) ? 'vi.useFakeTimers();' : undefined,
          })),
        },
      ],
    };
  }
}

function toExport(slug) {
  return slug
    .split('-')
    .map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1)))
    .join('');
}
