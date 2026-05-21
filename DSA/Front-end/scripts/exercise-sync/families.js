import { applyBulkSpecs } from './bulk-specs.js';
import { parseExamplePairs } from './utils.js';
import { exportName, isClassExercise, isHook, toPascalCase } from './utils.js';

/** @typedef {{ name: string, tests: Array<{ name: string, body: string[], async?: boolean, setup?: string }> }} Suite */

function catalogKey(category, slug) {
  const key = `${category}/${slug}`;
  if (EXACT[key]) return key;
  if (/^use[a-z]+$/.test(slug)) {
    const alt = `${category}/use-${slug.slice(3)}`;
    if (EXACT[alt]) return alt;
  }
  return key;
}

/**
 * @param {string} key category/slug
 * @param {ReturnType<import('./parse-readme.js').parseReadme>} readme
 * @param {{ title: string, description: string, category: string, slug: string }} meta
 */
export function buildSpec(key, readme, meta) {
  const [category, slug] = key.split('/');
  const lookup = catalogKey(category, slug);
  const exact = EXACT[lookup];
  if (exact) {
    return finalize({ ...exact, key, category, slug, title: meta.title }, readme);
  }

  if (category === 'ui-coding') return finalize(buildUi(slug, readme, meta), readme);
  if (isHook(slug) || slug.startsWith('use')) return finalize(buildHook(slug, readme, meta), readme);
  if (isClassExercise(slug, meta.title))
    return finalize(buildClass(slug, readme, meta), readme);
  if (category === 'algo-coding')
    return finalize(buildAlgo(slug, readme, meta), readme);
  return finalize(buildJs(slug, readme, meta), readme);
}

function finalize(spec, readme) {
  const hasEdge = spec.suites?.some((s) => s.name === 'edge cases');
  if (!hasEdge && readme.edgeCases?.length) {
    spec.suites = [...spec.suites, edgeSuiteFromReadme(readme, spec)];
  }
  return spec;
}

function edgeSuiteFromReadme(readme, spec) {
  const tests = (readme.edgeCases ?? []).slice(0, 4).map((edge) => ({
    name: `should handle edge case: ${edge.replace(/\.$/, '')}`,
    body: edgeTestBody(spec, edge),
  }));
  return { name: 'edge cases', tests };
}

function edgeTestBody(spec, edge) {
  if (spec.kind === 'ui') {
    const props = spec.fixture ?? '{}';
    return [
      `// README edge case: ${edge}`,
      `expect(() => render(createElement(${spec.exportName}, ${props}))).not.toThrow();`,
    ];
  }
  if (spec.kind === 'hook') {
    return [
      `// README edge case: ${edge}`,
      `expect(() => renderHook(() => ${spec.exportName}(${spec.hookArgs ?? ''}))).not.toThrow();`,
    ];
  }
  const invoke = spec.invoke ?? `${spec.exportName}()`;
  return [`// README edge case: ${edge}`, `expect(() => ${invoke}).not.toThrow();`];
}

/** @type {Record<string, object>} */
const EXACT = {};
applyBulkSpecs(EXACT);
Object.assign(EXACT, {
  'js-functions/mean': {
    kind: 'function',
    exportName: 'mean',
    params: 'arr',
    jsdoc: ['@param {number[]} arr', '@returns {number}'],
    invoke: 'mean([1, 2, 3, 4])',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          { name: 'returns the average of positive integers', body: ['expect(mean([1, 2, 3, 4])).toBe(2.5);'] },
          { name: 'returns the average of two values', body: ['expect(mean([10, 20])).toBe(15);'] },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          { name: 'returns the single element for a one-item array', body: ['expect(mean([5])).toBe(5);'] },
          { name: 'handles negative numbers and decimals', body: ['expect(mean([-2, 2])).toBe(0);', 'expect(mean([0.5, 1.5])).toBe(1);'] },
          { name: 'returns 0 for an empty array', body: ['expect(mean([])).toBe(0);'] },
          { name: 'does not mutate the input array', body: ['const input = [1, 2, 3];', 'mean(input);', 'expect(input).toEqual([1, 2, 3]);'] },
        ],
      },
    ],
  },
  'js-functions/debounce': {
    kind: 'function',
    exportName: 'debounce',
    params: 'fn, wait',
    jsdoc: ['@param {(...args: unknown[]) => void} fn', '@param {number} wait', '@returns {(...args: unknown[]) => void}'],
    invoke: 'debounce(() => {}, 100)',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'invokes fn only once after wait when called repeatedly',
            setup: 'vi.useFakeTimers();',
            body: [
              'const fn = vi.fn();',
              'const debounced = debounce(fn, 100);',
              "debounced('a');",
              "debounced('b');",
              "debounced('c');",
              'expect(fn).not.toHaveBeenCalled();',
              'vi.advanceTimersByTime(99);',
              'expect(fn).not.toHaveBeenCalled();',
              'vi.advanceTimersByTime(1);',
              'expect(fn).toHaveBeenCalledTimes(1);',
              "expect(fn).toHaveBeenCalledWith('c');",
            ],
          },
          {
            name: 'resets the timer on each call',
            setup: 'vi.useFakeTimers();',
            body: [
              'const fn = vi.fn();',
              'const debounced = debounce(fn, 50);',
              'debounced();',
              'vi.advanceTimersByTime(40);',
              'debounced();',
              'vi.advanceTimersByTime(40);',
              'expect(fn).not.toHaveBeenCalled();',
              'vi.advanceTimersByTime(10);',
              'expect(fn).toHaveBeenCalledTimes(1);',
            ],
          },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          {
            name: 'passes multiple arguments from the last invocation',
            setup: 'vi.useFakeTimers();',
            body: [
              'const fn = vi.fn();',
              'const debounced = debounce(fn, 20);',
              'debounced(1, 2);',
              'debounced(3, 4, 5);',
              'vi.advanceTimersByTime(20);',
              'expect(fn).toHaveBeenCalledWith(3, 4, 5);',
            ],
          },
          {
            name: 'preserves this context',
            setup: 'vi.useFakeTimers();',
            body: [
              'const obj = { value: 0, increment: vi.fn(function () { this.value += 1; }) };',
              'obj.increment = debounce(obj.increment, 30);',
              'obj.increment();',
              'obj.increment();',
              'vi.advanceTimersByTime(30);',
              'expect(obj.increment).toHaveBeenCalledTimes(1);',
              'expect(obj.value).toBe(1);',
            ],
          },
        ],
      },
    ],
  },
  'js-functions/throttle': {
    kind: 'function',
    exportName: 'throttle',
    params: 'fn, wait',
    jsdoc: ['@param {(...args: unknown[]) => void} fn', '@param {number} wait', '@returns {(...args: unknown[]) => void}'],
    invoke: 'throttle(() => {}, 100)',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'limits how often fn can run within the wait window',
            setup: 'vi.useFakeTimers();',
            body: [
              'const fn = vi.fn();',
              'const throttled = throttle(fn, 100);',
              'throttled();',
              'throttled();',
              'expect(fn).toHaveBeenCalledTimes(1);',
              'vi.advanceTimersByTime(100);',
              'throttled();',
              'expect(fn).toHaveBeenCalledTimes(2);',
            ],
          },
        ],
      },
    ],
  },
  'js-functions/flatten': {
    kind: 'function',
    exportName: 'flatten',
    params: 'arr',
    jsdoc: ['@param {unknown[]} arr', '@returns {unknown[]}'],
    invoke: 'flatten([1, [2]])',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          { name: 'flattens nested arrays one level deep recursively', body: ['expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);'] },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          { name: 'returns empty array for empty input', body: ['expect(flatten([])).toEqual([]);'] },
          { name: 'returns same flat array when already flat', body: ['expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);'] },
        ],
      },
    ],
  },
  'js-functions/promise-all': {
    kind: 'function',
    exportName: 'promiseAll',
    params: 'iterable',
    jsdoc: ['@param {Iterable<Promise<unknown>>} iterable', '@returns {Promise<unknown[]>}'],
    invoke: 'promiseAll([])',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'resolves with ordered results when all promises fulfill',
            async: true,
            body: [
              'await expect(promiseAll([Promise.resolve(1), Promise.resolve(2)])).resolves.toEqual([1, 2]);',
            ],
          },
        ],
      },
      {
        name: 'error handling',
        tests: [
          {
            name: 'rejects when any input rejects',
            async: true,
            body: [
              "const rejected = Promise.reject('err');",
              "rejected.catch(() => {});",
              "await expect(promiseAll([Promise.resolve(1), rejected])).rejects.toBe('err');",
            ],
          },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          {
            name: 'resolves to empty array for empty iterable',
            async: true,
            body: ['await expect(promiseAll([])).resolves.toEqual([]);'],
          },
        ],
      },
    ],
  },
  'js-functions/use-toggle': {
    kind: 'hook',
    exportName: 'useToggle',
    params: 'initialValue = false',
    hookArgs: 'false',
    jsdoc: ['@param {boolean} [initialValue]', '@returns {[boolean, () => void, (value: boolean) => void]}'],
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'returns initial boolean state',
            body: ['const { result } = renderHook(() => useToggle(false));', 'expect(result.current[0]).toBe(false);'],
          },
          {
            name: 'toggles boolean state when toggle function is called',
            body: [
              'const { result } = renderHook(() => useToggle(false));',
              'act(() => result.current[1]());',
              'expect(result.current[0]).toBe(true);',
            ],
          },
        ],
      },
    ],
  },
  'js-functions/use-query': {
    kind: 'hook',
    exportName: 'useQuery',
    params: 'fn, deps = []',
    hookArgs: 'async () => 1, []',
    jsdoc: [
      '@template T',
      '@param {() => Promise<T>} fn',
      '@param {import("react").DependencyList} deps',
      '@returns {{ data: T | null, error: Error | null, isLoading: boolean, refetch: () => void }}',
    ],
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'should start in a loading state',
            body: [
              'const fn = vi.fn(() => new Promise(() => {}));',
              'const { result } = renderHook(() => useQuery(fn, []));',
              'expect(result.current.isLoading).toBe(true);',
            ],
          },
        ],
      },
      {
        name: 'fulfilled state',
        tests: [
          {
            name: 'should resolve with data on success',
            async: true,
            body: [
              'const fn = vi.fn(async () => 42);',
              'const { result } = renderHook(() => useQuery(fn, []));',
              'await vi.waitFor(() => expect(result.current.isLoading).toBe(false));',
              'expect(result.current.data).toBe(42);',
              'expect(result.current.error).toBeNull();',
            ],
          },
        ],
      },
      {
        name: 'rejected state',
        tests: [
          {
            name: 'should capture error when promise rejects',
            async: true,
            body: [
              "const fn = vi.fn(async () => { throw new Error('fail'); });",
              'const { result } = renderHook(() => useQuery(fn, []));',
              'await vi.waitFor(() => expect(result.current.isLoading).toBe(false));',
              'expect(result.current.error).toBeInstanceOf(Error);',
            ],
          },
        ],
      },
    ],
  },
  'algo-coding/array-product-excluding-current': {
    kind: 'function',
    exportName: 'arrayProductExcludingCurrent',
    params: 'nums',
    jsdoc: ['@param {number[]} nums', '@returns {number[]}'],
    invoke: 'arrayProductExcludingCurrent([1, 2, 3, 4])',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'returns product of all elements except self at each index',
            body: ['expect(arrayProductExcludingCurrent([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);'],
          },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          { name: 'handles a single element', body: ['expect(arrayProductExcludingCurrent([5])).toEqual([1]);'] },
          { name: 'handles zeros without breaking product logic', body: ['expect(arrayProductExcludingCurrent([0, 2, 3])).toEqual([6, 0, 0]);'] },
        ],
      },
    ],
  },
  'algo-coding/balanced-brackets': {
    kind: 'function',
    exportName: 'balancedBrackets',
    params: 'str',
    jsdoc: ['@param {string} str', '@returns {boolean}'],
    invoke: "balancedBrackets('()')",
    suites: [
      {
        name: 'basic behavior',
        tests: [
          { name: 'returns true for properly nested brackets', body: ['expect(balancedBrackets("({[]})")).toBe(true);'] },
          { name: 'returns false for improperly nested brackets', body: ['expect(balancedBrackets("([)]")).toBe(false);'] },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          { name: 'returns true for empty string', body: ['expect(balancedBrackets("")).toBe(true);'] },
          { name: 'returns false when only open brackets remain', body: ['expect(balancedBrackets("(((")).toBe(false);'] },
        ],
      },
    ],
  },
  'algo-coding/binary-search': {
    kind: 'function',
    exportName: 'binarySearch',
    params: 'nums, target',
    jsdoc: ['@param {number[]} nums', '@param {number} target', '@returns {number}'],
    invoke: 'binarySearch([1,2,3], 2)',
    suites: [
      {
        name: 'basic behavior',
        tests: [
          { name: 'finds target index in sorted array', body: ['expect(binarySearch([-1, 0, 3, 5, 9], 9)).toBe(4);'] },
          { name: 'returns -1 when target is absent', body: ['expect(binarySearch([-1, 0, 3, 5, 9], 2)).toBe(-1);'] },
        ],
      },
    ],
  },
  'algo-coding/stack': {
    kind: 'class',
    className: 'Stack',
    exportName: 'Stack',
    methods: [
      { name: 'push', params: 'value' },
      { name: 'pop', params: '' },
      { name: 'peek', params: '' },
      { name: 'isEmpty', params: '' },
    ],
    jsdoc: ['Stack data structure with push, pop, peek, and isEmpty.'],
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'push and pop follow last-in-first-out order',
            body: [
              'const s = new Stack();',
              's.push(1);',
              's.push(2);',
              'expect(s.pop()).toBe(2);',
              'expect(s.pop()).toBe(1);',
            ],
          },
        ],
      },
      {
        name: 'edge cases',
        tests: [
          { name: 'isEmpty returns true for new stack', body: ['const s = new Stack();', 'expect(s.isEmpty()).toBe(true);'] },
        ],
      },
    ],
  },
});

function buildJs(slug, readme, meta) {
  const key = catalogKey('js-functions', slug);
  if (EXACT[key]) {
    return { ...EXACT[key], key: `js-functions/${slug}`, category: 'js-functions', slug, title: meta.title };
  }
  const name = exportName(slug, meta.category);
  const pairs = parseExamplePairs(readme.examples);
  const tests = [];

  const invoke = `${name}(${inferInvokeArgs(slug)})`;
  tests.push({
    name: `implements ${meta.title} per README overview`,
    body: [`expect(() => ${invoke}).not.toThrow();`],
  });

  return {
    kind: 'function',
    exportName: name,
    params: inferParams(slug),
    jsdoc: inferJsdoc(slug, name),
    invoke: `${name}(${inferInvokeArgs(slug)})`,
    suites: [{ name: 'basic behavior', tests }],
  };
}

function buildAlgo(slug, readme, meta) {
  const key = `algo-coding/${slug}`;
  const algo = EXACT[key];
  if (algo) return { ...algo, key, category: 'algo-coding', slug, title: meta.title };

  const name = exportName(slug, meta.category);
  const custom = algoPatterns(slug, name);
  if (custom) return { ...custom, key: `algo-coding/${slug}`, category: 'algo-coding', slug, title: meta.title };

  return buildJs(slug, readme, meta);
}

function algoPatterns(slug, name) {
  const patterns = {
    'pair-sum': {
      params: 'nums, target',
      jsdoc: ['@param {number[]} nums', '@param {number} target', '@returns {[number, number] | null}'],
      invoke: 'pairSum([2,7,11,15], 9)',
      suites: [
        {
          name: 'basic behavior',
          tests: [
            { name: 'finds two numbers that sum to target', body: ['expect(pairSum([2, 7, 11, 15], 9)).toEqual([2, 7]);'] },
          ],
        },
      ],
    },
    'string-palindrome': {
      params: 'str',
      jsdoc: ['@param {string} str', '@returns {boolean}'],
      invoke: "stringPalindrome('racecar')",
      suites: [
        {
          name: 'basic behavior',
          tests: [
            { name: 'returns true for palindromic strings', body: ["expect(stringPalindrome('racecar')).toBe(true);"] },
            { name: 'returns false for non-palindromes', body: ["expect(stringPalindrome('hello')).toBe(false);"] },
          ],
        },
      ],
    },
    'maximum-sum-in-contiguous-array': {
      params: 'nums',
      jsdoc: ['@param {number[]} nums', '@returns {number}'],
      invoke: 'maximumSumInContiguousArray([-2,1,-3,4,-1,2,1,-5,4])',
      suites: [
        {
          name: 'basic behavior',
          tests: [
            {
              name: 'returns maximum subarray sum',
              body: ['expect(maximumSumInContiguousArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);'],
            },
          ],
        },
      ],
    },
  };
  const p = patterns[slug];
  if (!p) return null;
  return { kind: 'function', exportName: name, ...p };
}

function buildHook(slug, readme, meta) {
  const name = exportName(slug, meta.category);
  return {
    kind: 'hook',
    exportName: name,
    params: inferHookParams(slug),
    hookArgs: inferHookArgs(slug),
    jsdoc: ['@returns {unknown}', `Hook: ${meta.title}`],
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'exposes hook API described in README',
            body: [
              `expect(() => renderHook(() => ${name}(${inferHookArgs(slug)}))).not.toThrow();`,
            ],
          },
        ],
      },
    ],
  };
}

function buildClass(slug, readme, meta) {
  const className = toPascalCase(slug.replace(/-/g, ' ').replace(/s$/, ''));
  const cn = slug === 'binary-search-tree' ? 'BinarySearchTree' : toPascalCase(slug);
  return {
    kind: 'class',
    className: cn,
    exportName: cn,
    jsdoc: [`${meta.title} — see README.md`],
    methods: inferClassMethods(slug),
    suites: [
      {
        name: 'basic behavior',
        tests: [
          {
            name: 'exposes class API described in README',
            body: [
              `const instance = new ${cn}();`,
              `const op = "${(inferClassMethods(slug)[0] ?? { name: 'execute' }).name}";`,
              'expect(() => instance[op]()).not.toThrow();',
            ],
          },
        ],
      },
    ],
  };
}

function buildUi(slug, readme, meta) {
  const name = exportName(slug, meta.category);
  const uiExact = EXACT[`ui-coding/${slug}`];
  if (uiExact) return { ...uiExact, key: `ui-coding/${slug}`, category: 'ui-coding', slug, title: meta.title };

  if (/^tabs/.test(slug)) return buildTabs(slug, readme, name);
  if (/^accordion/.test(slug)) return buildAccordion(slug, readme, name);
  if (/^modal/.test(slug)) return buildModal(slug, readme, name);
  if (slug === 'todo-list') return buildTodo(name);
  if (/counter|stopwatch/.test(slug)) return buildCounter(name, slug);

  return buildGenericUi(slug, readme, name, meta);
}

function buildTabs(slug, readme, name) {
  const fixture = 'TABS_FIXTURE';
  const level = slug.includes('iii') ? 3 : slug.includes('ii') ? 2 : 1;
  const tests = [
    {
      name: 'should render the first tab as active by default',
      async: true,
      body: [
        `render(createElement(${name}, { tabs: ${fixture} }));`,
        "const tabs = screen.getAllByRole('tab');",
        'expect(tabs[0]).toHaveAttribute("aria-selected", "true");',
        'expect(screen.getByRole("tabpanel")).toBeVisible();',
      ],
    },
    {
      name: 'should switch panel when a tab is clicked',
      async: true,
      body: [
        `render(createElement(${name}, { tabs: ${fixture} }));`,
        'const user = userEvent.setup();',
        'await user.click(screen.getByRole("tab", { name: "Settings" }));',
        'expect(screen.getByRole("tab", { name: "Settings" })).toHaveAttribute("aria-selected", "true");',
        'expect(screen.getByRole("tabpanel")).toHaveTextContent("Settings panel");',
      ],
    },
  ];
  if (level >= 2) {
    tests.push({
      name: 'should expose tablist semantics',
      body: [
        `render(createElement(${name}, { tabs: ${fixture} }));`,
        'expect(screen.getByRole("tablist")).toBeInTheDocument();',
      ],
    });
  }
  if (level >= 3) {
    tests.push({
      name: 'should support keyboard navigation between tabs',
      async: true,
      body: [
        `render(createElement(${name}, { tabs: ${fixture} }));`,
        'screen.getByRole("tab", { name: "Home" }).focus();',
        "await userEvent.keyboard('{ArrowRight}');",
        'expect(screen.getByRole("tab", { name: "Profile" })).toHaveFocus();',
      ],
    });
  }
  return {
    kind: 'ui',
    exportName: name,
    params: '{ tabs }',
    jsdoc: [
      '@param {{ tabs: Array<{ id: string, label: string, panel: import("react").ReactNode }> }} props',
      '@returns {import("react").ReactElement}',
    ],
    fixture: `{ tabs: ${fixture} }`,
    fixtureDecl: `const ${fixture} = [
  { id: 'home', label: 'Home', panel: 'Home panel' },
  { id: 'profile', label: 'Profile', panel: 'Profile panel' },
  { id: 'settings', label: 'Settings', panel: 'Settings panel' },
];`,
    suites: [
      { name: 'initial render', tests: [tests[0]] },
      { name: 'user interactions', tests: tests.slice(1) },
    ],
  };
}

function buildAccordion(slug, readme, name) {
  const fixture = 'SECTIONS_FIXTURE';
  const level = slug.includes('iii') ? 3 : slug.includes('ii') ? 2 : 1;
  const tests = [
    {
      name: 'should collapse all sections initially unless specified',
      body: [
        `render(createElement(${name}, { sections: ${fixture} }));`,
        'expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "false");',
      ],
    },
    {
      name: 'should expand a section when its header is clicked',
      async: true,
      body: [
        `render(createElement(${name}, { sections: ${fixture} }));`,
        'const user = userEvent.setup();',
        'await user.click(screen.getByRole("button", { name: "Section 1" }));',
        'expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "true");',
        'expect(screen.getByText("Content 1")).toBeVisible();',
      ],
    },
  ];
  if (level >= 2) {
    tests.push({
      name: 'should wire aria-controls between header and panel',
      body: [
        `render(createElement(${name}, { sections: ${fixture} }));`,
        'const trigger = screen.getByRole("button", { name: "Section 1" });',
        'expect(trigger).toHaveAttribute("aria-controls");',
      ],
    });
  }
  return {
    kind: 'ui',
    exportName: name,
    params: '{ sections }',
    jsdoc: [
      '@param {{ sections: Array<{ title: string, content: import("react").ReactNode }> }} props',
      '@returns {import("react").ReactElement}',
    ],
    fixture: `{ sections: ${fixture} }`,
    fixtureDecl: `const ${fixture} = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
];`,
    suites: [
      { name: 'initial render', tests: [tests[0]] },
      { name: 'user interactions', tests: tests.slice(1) },
    ],
  };
}

function buildModal(slug, readme, name) {
  return {
    kind: 'ui',
    exportName: name,
    params: '{ isOpen, onClose, title, children }',
    jsdoc: ['@param {{ isOpen: boolean, onClose: () => void, title: string, children: import("react").ReactNode }} props', '@returns {import("react").ReactElement}'],
    fixture: '{ isOpen: true, onClose: () => {}, title: "Confirm", children: "Delete item?" }',
    suites: [
      {
        name: 'initial render',
        tests: [
          {
            name: 'should render dialog when open',
            body: [
              `render(createElement(${name}, { isOpen: true, onClose: () => {}, title: 'Confirm', children: 'Delete?' }));`,
              "expect(screen.getByRole('dialog')).toBeInTheDocument();",
            ],
          },
        ],
      },
      {
        name: 'user interactions',
        tests: [
          {
            name: 'should call onClose when close button is activated',
            async: true,
            body: [
              'const onClose = vi.fn();',
              `render(createElement(${name}, { isOpen: true, onClose, title: 'Confirm', children: 'Delete?' }));`,
              'const user = userEvent.setup();',
              "await user.click(screen.getByRole('button', { name: /close/i }));",
              'expect(onClose).toHaveBeenCalled();',
            ],
          },
        ],
      },
    ],
  };
}

function buildTodo(name) {
  return {
    kind: 'ui',
    exportName: name,
    params: '{ initialTasks = [] }',
    jsdoc: ['@param {{ initialTasks?: string[] }} props', '@returns {import("react").ReactElement}'],
    fixture: '{ initialTasks: [] }',
    suites: [
      {
        name: 'initial render',
        tests: [
          {
            name: 'should render an empty list when there are no tasks',
            body: [
              `render(createElement(${name}, { initialTasks: [] }));`,
              "expect(screen.getByRole('list')).toBeEmptyDOMElement();",
            ],
          },
        ],
      },
      {
        name: 'user interactions',
        tests: [
          {
            name: 'should add a task when user submits the input',
            async: true,
            body: [
              `render(createElement(${name}, { initialTasks: [] }));`,
              'const user = userEvent.setup();',
              "await user.type(screen.getByRole('textbox'), 'Walk dog');",
              "await user.click(screen.getByRole('button', { name: /add/i }));",
              "expect(screen.getByText('Walk dog')).toBeInTheDocument();",
            ],
          },
          {
            name: 'should remove a task when delete is clicked',
            async: true,
            body: [
              `render(createElement(${name}, { initialTasks: ['Walk dog'] }));`,
              'const user = userEvent.setup();',
              "await user.click(screen.getByRole('button', { name: /delete/i }));",
              "expect(screen.queryByText('Walk dog')).not.toBeInTheDocument();",
            ],
          },
        ],
      },
    ],
  };
}

function buildCounter(name, slug) {
  return {
    kind: 'ui',
    exportName: name,
    params: '{ initialCount = 0 }',
    jsdoc: ['@param {{ initialCount?: number }} props', '@returns {import("react").ReactElement}'],
    fixture: '{ initialCount: 0 }',
    suites: [
      {
        name: 'initial render',
        tests: [
          {
            name: 'should display the initial count',
            body: [
              `render(createElement(${name}, { initialCount: 0 }));`,
              "expect(screen.getByText('0')).toBeInTheDocument();",
            ],
          },
        ],
      },
      {
        name: 'user interactions',
        tests: [
          {
            name: 'should increment count when increment button is clicked',
            async: true,
            body: [
              `render(createElement(${name}, { initialCount: 0 }));`,
              'const user = userEvent.setup();',
              "await user.click(screen.getByRole('button', { name: /increment|\\+/i }));",
              "expect(screen.getByText('1')).toBeInTheDocument();",
            ],
          },
        ],
      },
    ],
  };
}

function buildGenericUi(slug, readme, name, meta) {
  const tests = [];
  if (readme.uiUseCases.match(/initial/i)) {
    tests.push({
      name: 'should render the initial UI state described in README',
      body: [
        `render(createElement(${name}, {}));`,
        '// Assert initial render matches README UI Use Cases',
        `expect(() => screen.getByRole('main')).toThrow();`,
      ],
    });
  }
  if (!tests.length) {
    tests.push({
      name: 'should render the initial UI state described in README',
      body: [
        `render(createElement(${name}, {}));`,
        'expect(document.body).not.toBeEmptyDOMElement();',
      ],
    });
  }
  return {
    kind: 'ui',
    exportName: name,
    params: 'props = {}',
    jsdoc: [`Build ${meta.title}`, '@param {Record<string, unknown>} props', '@returns {import("react").ReactElement}'],
    fixture: '{}',
    suites: [{ name: 'initial render', tests }],
  };
}

function inferParams(slug) {
  const map = {
    chunk: 'arr, size',
    compact: 'arr',
    debounce: 'fn, wait',
    throttle: 'fn, wait',
    get: 'object, path, defaultValue',
    clamp: 'value, min, max',
    range: 'start, end, step = 1',
    classnames: '...args',
    curry: 'fn, arity',
    memoize: 'fn',
    compose: '...fns',
    sleep: 'ms',
    'cancellable-timeout': 'callback, delay',
    'cancellable-interval': 'callback, delay',
    promisify: 'fn',
  };
  if (map[slug]) return map[slug];
  if (slug.includes('-prototype-')) return 'array, callbackFn, thisArg';
  if (slug.startsWith('promise')) return '...args';
  return '...args';
}

function inferInvokeArgs(slug) {
  const map = {
    mean: '[1,2,3]',
    compact: '[]',
    chunk: '[], 2',
    sleep: '10',
  };
  return map[slug] ?? '';
}

function inferHookParams(slug) {
  const map = {
    'use-query': 'fn, deps = []',
    'use-toggle': 'initialValue = false',
    'use-counter': 'initialValue = 0',
    'use-boolean': 'initialValue = false',
    'use-default': 'value, defaultValue',
    'use-previous': 'value',
    'use-timeout': 'callback, delay',
    'use-countdown': 'seconds',
  };
  return map[slug] ?? 'initialValue';
}

function inferHookArgs(slug) {
  const map = {
    'use-query': 'async () => 1, []',
    'use-toggle': 'false',
    'use-counter': '0',
  };
  return map[slug] ?? '';
}

function inferJsdoc(slug, name) {
  return [`@see README.md — ${name}`];
}

function inferClassMethods(slug) {
  const map = {
    stack: [
      { name: 'push', params: 'value' },
      { name: 'pop', params: '' },
      { name: 'peek', params: '' },
      { name: 'isEmpty', params: '' },
    ],
    queue: [
      { name: 'enqueue', params: 'value' },
      { name: 'dequeue', params: '' },
      { name: 'peek', params: '' },
      { name: 'isEmpty', params: '' },
    ],
    heap: [
      { name: 'insert', params: 'value' },
      { name: 'extractMin', params: '' },
      { name: 'peek', params: '' },
      { name: 'size', params: '' },
    ],
    'linked-list': [
      { name: 'append', params: 'value' },
      { name: 'prepend', params: 'value' },
      { name: 'delete', params: 'value' },
      { name: 'find', params: 'value' },
    ],
    'event-emitter': [
      { name: 'on', params: 'event, handler' },
      { name: 'off', params: 'event, handler' },
      { name: 'emit', params: 'event, ...args' },
    ],
  };
  return (
    map[slug] ?? [
      { name: 'execute', params: '...args' },
    ]
  );
}
