/** @typedef {{ category: string, slug: string, title: string, difficulty: string, description: string }} Meta */

/**
 * @param {Meta} meta
 * @returns {{ overview: string, functional: string[], constraints: string[], edgeCases: string[], examples: string, notes: string, ui?: { useCases: string, rules: string, a11y: string } }}
 */
import { mergeOverride } from './overrides.js';

export function enrichExercise(meta) {
  const handler =
    SPECIAL[meta.slug] || matchFamily(meta) || defaultHandler;
  const key = `${meta.category}/${meta.slug}`;
  return mergeOverride(key, handler(meta));
}

/** @type {Record<string, (meta: Meta) => ReturnType<typeof enrichExercise>>} */
const SPECIAL = {
  mean: (m) => ({
    ...base(m),
    examples: [
      'Input: `[1, 2, 3, 4]` → Output: `2.5`',
      'Input: `[10, 20]` → Output: `15`',
      'Input: `[]` → Output: `0` (per test convention)',
    ].join('\n'),
    functional: [
      'Accept an array of numbers and return their arithmetic mean.',
      'Handle empty arrays without throwing.',
    ],
    edgeCases: ['Empty array', 'Single element', 'Negative and fractional values', 'Do not mutate input'],
    notes: [
      'Use a single pass with `reduce` or loop; watch floating-point precision in tests.',
      'Clarify empty-array behavior with your interviewer if not specified.',
    ],
  }),
  debounce: timingDebounce,
  'debounce-ii': timingDebounceII,
  throttle: timingThrottle,
};

function timingDebounce(m) {
  return {
    ...base(m),
    functional: [
      'Return a wrapped function that delays calling `fn` until `wait` ms after the last invocation.',
      'Pass the latest arguments from the final call in a burst.',
      'Preserve `this` when the debounced function is used as a method.',
    ],
    constraints: [
      'Use `setTimeout` / `clearTimeout` only — no lodash/underscore.',
      'Each new call cancels the previous scheduled invocation.',
    ],
    edgeCases: [
      'Rapid consecutive calls',
      'Different debounced instances are independent',
      'Method invocation with object context',
    ],
    examples: [
      'Burst: `debounced(a); debounced(b);` → only `fn(b)` runs once after `wait`.',
      'Timer reset: each call restarts the countdown.',
    ].join('\n'),
    notes: [
      'Store timeout id in closure; clear before scheduling anew.',
      'Interview follow-up: cancel/flush variants (see Debounce II).',
    ],
  };
}

function timingDebounceII(m) {
  const baseContent = timingDebounce(m);
  return {
    ...baseContent,
    functional: [
      ...baseContent.functional,
      'Expose `.cancel()` to abort a pending invocation without running `fn`.',
      'Expose `.flush()` to invoke `fn` immediately with the latest pending args, then clear the timer.',
    ],
    notes: [
      ...baseContent.notes,
      'Decide whether `flush` runs when nothing is scheduled — document your choice.',
    ],
  };
}

function timingThrottle(m) {
  return {
    ...base(m),
    functional: [
      'Limit how often `fn` executes — at most once per `wait` window.',
      'Typically invoke on the leading edge, trailing edge, or both (clarify in tests).',
    ],
    edgeCases: ['Burst calls within window', 'Final trailing call after burst ends'],
    notes: [
      'Do not confuse throttle with debounce: throttle guarantees periodic execution under load.',
      'GreatFrontEnd may specify leading/trailing — align with `index.test.js`.',
    ],
  };
}

/**
 * @param {Meta} meta
 */
function matchFamily(meta) {
  const { slug, category } = meta;
  if (category === 'ui-coding') return uiFamily(slug);
  if (category === 'algo-coding') return algoFamily(slug);
  if (slug.startsWith('use')) return hookFamily;
  if (/^promise/.test(slug) || slug.includes('promisify') || slug === 'sleep')
    return promiseFamily;
  if (slug.includes('prototype')) return arrayMethodFamily;
  if (/debounce|throttle|cancellable|sleep/.test(slug)) return timingFamily;
  if (/get-elements|jquery|table-of-contents|html-serializer|reading-order/.test(slug))
    return domFamily;
  if (/sort|search|tree|graph|linked-list|heap|queue|stack|trie|grid|interval|substring|palindrome|anagram|coin|path|island|matrix|rotate|traversal|dijkstra|topological|merge-sort|quick-sort|bubble-sort|insertion-sort|selection-sort|heap-sort/.test(slug))
    return algoFamily(slug);
  if (/flatten|chunk|compact|group-by|intersection|union|difference|range|clamp|curry|memoize|compose|classnames|deep-|squash|unsquash|event-emitter|singleton|backbone|turtle|map-async/.test(slug))
    return utilityFamily;
  return null;
}

/** @param {Meta} m */
function base(m) {
  return {
    overview: expandOverview(m),
    functional: [m.description],
    constraints: defaultConstraints(m),
    edgeCases: defaultEdgeCases(m),
    examples: defaultExamples(m),
    notes: defaultNotes(m),
  };
}

function expandOverview(m) {
  const verb = m.category === 'ui-coding' ? 'Build' : 'Implement';
  return `${verb} **${m.title}** as described: ${m.description}`;
}

function defaultConstraints(m) {
  const items = [
    'Match the exported API expected by `index.test.js` in this folder.',
    'Keep the solution self-contained in `index.js` — no cross-exercise imports.',
  ];
  if (m.category !== 'ui-coding') {
    items.push('Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.');
  }
  return items;
}

function defaultEdgeCases(m) {
  if (m.category === 'ui-coding')
    return ['Empty data sets', 'Rapid repeated interactions', 'Keyboard-only usage', 'Screen reader announcements'];
  if (m.difficulty === 'Hard')
    return ['Large inputs', 'Degenerate structures', 'Off-by-one boundaries'];
  return ['Empty or minimal input', 'Single-element input', 'Invalid or missing values if applicable'];
}

function defaultExamples(m) {
  if (m.category === 'ui-coding') {
    return 'Describe behavior in the UI section below; automated examples live in tests once enabled.';
  }
  return `Refer to \`index.test.js\` for concrete inputs/outputs. Add manual examples here as you refine the API.`;
}

function defaultNotes(m) {
  const notes = [
    'Read tests first to learn the exact signature and edge-case contract.',
    'State time/space complexity aloud in interviews when relevant.',
  ];
  if (m.difficulty === 'Hard') notes.push('Break into sub-problems; validate invariants on paper before coding.');
  return notes;
}

/** @param {Meta} m */
function defaultHandler(m) {
  return base(m);
}

function uniq(arr) {
  return [...new Set(arr)];
}

/** @param {Meta} m */
function hookFamily(m) {
  return {
    ...base(m),
    functional: [
      m.description,
      'Expose a hook-shaped API (or testable state machine) consistent with React conventions.',
      'Return stable tuple/object shape across renders where tests expect it.',
    ],
    constraints: [
      'If not using React in tests, implement core state logic in plain functions the tests can call.',
      'Avoid stale closures in effects/subscriptions.',
    ],
    edgeCases: [
      'Initial mount vs update',
      'Unmount cleanup',
      'Strict Mode double-invoke (if targeting React)',
    ],
    notes: [
      'Separate “hook API design” from “state transition rules” when explaining aloud.',
      'Mention dependency arrays, cleanup, and referential stability for follow-ups.',
    ],
  };
}

/** @param {Meta} m */
function promiseFamily(m) {
  return {
    ...base(m),
    functional: [m.description, 'Return Promises that follow spec ordering and error propagation.'],
    edgeCases: ['Empty input iterables', 'Mixed resolve/reject timing', 'Non-promise thenables if spec requires'],
    notes: [
      'Never swallow rejections; preserve first-rejection semantics for `all`/`race` variants.',
      'Consider microtask ordering when chaining.',
    ],
  };
}

/** @param {Meta} m */
function arrayMethodFamily(m) {
  const method = m.slug.split('-prototype-')[1] || 'method';
  return {
    ...base(m),
    functional: [
      `Polyfill or replicate \`Array.prototype.${method}\` behavior per ECMAScript where tests apply.`,
      'Respect sparse arrays, holes, and callback arguments (`element`, `index`, `array`).',
    ],
    edgeCases: ['Empty array', 'Sparse arrays', 'Mutate vs copy per spec'],
    notes: ['Compare your implementation to MDN for the specific method version.'],
  };
}

/** @param {Meta} m */
function timingFamily(m) {
  return {
    ...base(m),
    functional: [m.description],
    edgeCases: ['Clearing timers', 'Overlapping schedules', 'No-op cancel'],
    notes: ['Use Vitest fake timers in tests; be explicit about trailing vs leading behavior.'],
  };
}

/** @param {Meta} m */
function domFamily(m) {
  return {
    ...base(m),
    functional: [m.description, 'Traverse or query a DOM-like structure provided by tests.'],
    constraints: ['Avoid real `document` if tests use mocks; match test fixture shape.'],
    edgeCases: ['Nested nodes', 'Empty trees', 'Duplicate matches'],
    notes: ['Clarify depth-first vs breadth-first traversal when walking trees.'],
  };
}

/** @param {Meta} m */
function utilityFamily(m) {
  return {
    ...base(m),
    functional: [m.description],
    edgeCases: ['Nested structures', 'Reference equality vs deep equality', 'Immutability expectations'],
    notes: ['Prefer iterative solutions if recursion depth is unbounded.'],
  };
}

/** @param {string} slug */
function algoFamily(slug) {
  return (m) => {
    const kind = algoKind(slug);
    return {
      ...base(m),
      functional: uniq([m.description, ...kind.functional]),
      edgeCases: uniq([...kind.edgeCases, ...defaultEdgeCases(m)]),
      notes: uniq([...kind.notes, ...defaultNotes(m)]),
    };
  };
}

function algoKind(slug) {
  if (/sort/.test(slug))
    return {
      functional: ['Sort in-place or return new array per tests; state stability requirements if any.'],
      edgeCases: ['Already sorted', 'Duplicates', 'Single element'],
      notes: ['Know time complexity: O(n log n) typical for comparison sorts.'],
    };
  if (/tree|bst|binary-tree/.test(slug))
    return {
      functional: ['Define node shape used by tests; traverse recursively or iteratively.'],
      edgeCases: ['Empty tree', 'Skewed tree', 'Duplicate keys in BST'],
      notes: ['Clarify preorder/inorder/postorder when rebuilding or serializing.'],
    };
  if (/graph|dijkstra|topological|connected|clone/.test(slug))
    return {
      functional: ['Represent graph as adjacency list/matrix per test fixtures.'],
      edgeCases: ['Disconnected components', 'Cycles', 'Self-loops'],
      notes: ['State visited set; watch stack overflow on deep DFS.'],
    };
  if (/linked-list/.test(slug))
    return {
      functional: ['Handle `null` head; mutate pointers carefully.'],
      edgeCases: ['Single node', 'Cycles', 'Tail deletion'],
      notes: ['Use dummy head node technique when simplifying edge cases.'],
    };
  if (/grid|matrix|island|path/.test(slug))
    return {
      functional: ['Use 4-/8-directional movement as specified; bounds-check neighbors.'],
      edgeCases: ['1x1 grid', 'All blocked cells', 'Visit marking to avoid cycles'],
      notes: ['BFS for shortest path; DFS for exploration — pick based on problem.'],
    };
  if (/interval|meeting/.test(slug))
    return {
      functional: ['Sort by start or end time first; merge with overlap rules.'],
      edgeCases: ['Touching intervals', 'Nested intervals', 'Unsorted input'],
      notes: ['Line sweep is a common follow-up for room/meeting problems.'],
    };
  if (/substring|palindrome|anagram|decode/.test(slug))
    return {
      functional: ['Optimize from brute force using sliding window, DP, or hash maps.'],
      edgeCases: ['Empty string', 'All same character', 'Unicode if mentioned'],
      notes: ['Articulate DP state transition before coding hard variants.'],
    };
  return {
    functional: ['Choose appropriate data structure (stack, queue, heap, hash map).'],
    edgeCases: ['Minimum and maximum sizes', 'Negative numbers if allowed'],
    notes: ['Verify invariants with a small hand-drawn example.'],
  };
}

/** @param {string} slug */
function uiFamily(slug) {
  return (m) => {
    const spec = uiSpec(slug, m);
    return {
      ...base(m),
      functional: uniq(spec.functional),
      edgeCases: spec.edgeCases,
      examples: spec.examples,
      notes: spec.notes,
      ui: spec.ui,
    };
  };
}

function uiSpec(slug, m) {
  const sharedA11y = {
    useCases: '',
    rules: '',
    a11y: '',
  };

  if (/accordion/.test(slug)) {
    const level = slug.includes('iii') ? 'full' : slug.includes('ii') ? 'semi' : 'basic';
    return {
      functional: [
        m.description,
        'Render a vertical list of sections; each has a header control and collapsible panel.',
        level === 'basic'
          ? 'Only one section open at a time (unless spec says otherwise).'
          : 'Support expand/collapse per section with correct open state.',
      ],
      edgeCases: ['All collapsed initially', 'Rapid toggle clicks', 'Dynamic section list'],
      examples:
        'Click header "FAQ 1" → panel 1 expands, others collapse. Click again → panel 1 collapses.',
      notes: [
        'Prefer semantic `<button>` headers instead of clickable `<div>`s.',
        'Animate height carefully to avoid layout thrash in interviews.',
      ],
      ui: {
        useCases: [
          '**Initial render:** First section collapsed (or one expanded per spec); headers keyboard-focusable.',
          '**Expand:** User activates header → panel becomes visible; `aria-expanded` updates.',
          '**Collapse:** Second activation on open header hides panel.',
          level !== 'basic' &&
            '**Keyboard:** Up/Down or Home/End move focus between headers per ARIA accordion pattern.',
        ]
          .filter(Boolean)
          .join('\n'),
        rules: [
          'Header click toggles only its panel (respect single-open vs multi-open rules).',
          'Do not navigate away or submit forms when toggling.',
          'Panel content remains in DOM (hidden) unless lazy-mount is specified.',
        ].join('\n'),
        a11y: [
          'Roles: `region` or grouped sections with `heading` + `button` controls.',
          '`aria-expanded`, `aria-controls`, stable `id` wiring between header and panel.',
          level === 'full'
            ? 'Full keyboard support per WAI-ARIA Accordion Pattern (III).'
            : 'At minimum correct roles/states for Accordion II.',
        ].join('\n'),
      },
    };
  }

  if (/tabs/.test(slug)) {
    const level = slug.includes('iii') ? 'full' : slug.includes('ii') ? 'semi' : 'basic';
    return {
      functional: [m.description, 'Show one tab panel at a time; tab list reflects selection.'],
      edgeCases: ['Disabled tab', 'Dynamic tabs', 'Controlled vs uncontrolled selection'],
      examples: 'Select "Profile" tab → only Profile panel visible; tab has selected styling.',
      notes: ['Keep tab buttons in a single tablist container.'],
      ui: {
        useCases:
          '**Initial:** First tab selected.\n**Select tab:** Click or keyboard activates tab → corresponding panel unhidden.\n**Focus:** Tab key moves into tab list; arrows switch tabs when fully accessible.',
        rules:
          'Activating a tab must not reload page.\nInactive panels are hidden from view (and ideally from accessibility tree).',
        a11y:
          '`role="tablist"`, tabs `role="tab"`, panels `role="tabpanel"`.\n`aria-selected`, `tabIndex` roving focus for level II/III.\n' +
          (level === 'full' ? 'Arrow keys, Home/End per WAI-ARIA Tabs Pattern.' : ''),
      },
    };
  }

  if (/modal/.test(slug)) {
    return {
      functional: [m.description, 'Open/close dialog; trap focus while open; restore focus on close.'],
      edgeCases: ['Nested dialogs', 'Long scrollable content', 'Opening while another modal open'],
      examples: 'Click "Delete" → modal opens with confirm/cancel; Esc closes and returns focus to trigger.',
      notes: ['Use portal for overlay; lock body scroll if required.'],
      ui: {
        useCases:
          '**Open:** Trigger shows modal + backdrop.\n**Close:** Explicit buttons, backdrop click (if allowed), Escape.\n**Focus:** First focusable element focused on open.',
        rules: 'Background content inert while open.\nDo not leave invisible focusable elements behind overlay.',
        a11y:
          '`role="dialog"` + `aria-modal="true"`.\nLabel via `aria-labelledby` / `aria-describedby`.\nFocus trap and restore; Esc handler for higher levels.',
      },
    };
  }

  if (/counter|stopwatch|digital-clock|traffic-light/.test(slug)) {
    return {
      functional: [m.description],
      edgeCases: ['Rapid clicks', 'Pause/resume', 'Overflow display'],
      examples: 'Click "+" → count increments immediately on screen.',
      notes: ['Use `setInterval`/`requestAnimationFrame` judiciously; clean up on unmount.'],
      ui: {
        useCases:
          '**Idle:** Display initial value/time.\n**Interact:** Buttons adjust state; UI updates synchronously.\n**Timers:** Automatic transitions (traffic light) without user input.',
        rules: 'Buttons disabled when action invalid (e.g., cannot go below zero if spec says).',
        a11y: 'Buttons have accessible names; live regions for changing values if needed.',
      },
    };
  }

  if (/todo|contact-form|job-board|users-database/.test(slug)) {
    return {
      functional: [m.description, 'Reflect loading/success/error states for async actions when applicable.'],
      edgeCases: ['Empty list', 'Validation errors', 'Duplicate submissions'],
      examples: 'Add task "Buy milk" → appears in list; delete removes without full page reload.',
      notes: ['Optimistic UI vs wait-for-server — pick one and explain tradeoffs.'],
      ui: {
        useCases:
          '**CRUD flows:** Create item, list updates, delete/edit removes or updates row.\n**Forms:** Validation messages on blur/submit; disable submit while pending.',
        rules: 'Prevent double-submit while request in flight.\nPreserve keyboard access to all actions.',
        a11y: 'Label every input; announce errors with `aria-live` where appropriate.',
      },
    };
  }

  if (/carousel|image-carousel/.test(slug)) {
    return {
      functional: [m.description],
      edgeCases: ['First/last slide', 'Single image', 'Rapid next clicks'],
      examples: 'Click next → slides to following image with transition (II/III).',
      notes: ['Preload adjacent images in production; for interview, CSS transform is enough.'],
      ui: {
        useCases:
          '**Navigate:** Next/prev controls cycle images; optional autoplay.\n**Indicators:** Dots reflect active slide.',
        rules: 'Wrap from last to first only if spec requires looping.',
        a11y: 'Pause autoplay on hover/focus; provide textual labels for controls.',
      },
    };
  }

  if (/data-table|transfer-list|nested-checkboxes|wordle|tic-tac-toe|memory-game|whack-a-mole|connect-four|file-explorer|star-rating|like-button|progress-bars|holy-grail/.test(slug)) {
    return genericUi(m, slug);
  }

  return genericUi(m, slug);
}

function genericUi(m, slug) {
  return {
    functional: [m.description, 'Component should be reusable and state-driven.'],
    edgeCases: ['Empty states', 'Loading/error', 'Responsive narrow viewport'],
    examples: `Walk through the primary user journey for **${m.title}** step by step in your README notes as you implement.`,
    notes: [
      'Sketch component hierarchy and state on paper before coding.',
      'Explain tradeoffs: controlled vs uncontrolled, lifting state up.',
    ],
    ui: {
      useCases: `**Initial render:** Placeholder/empty state per spec.\n**Core interaction:** User performs the main action described in the problem (${m.description}).\n**Feedback:** UI updates immediately to reflect new state.`,
      rules:
        'Each control performs one clear action.\nAvoid full page reloads.\nDo not lose user input on unrelated updates.',
      a11y:
        'All interactive elements keyboard reachable with visible focus.\nUse semantic HTML landmarks and labels.\nAdd ARIA only where semantics are insufficient.',
    },
  };
}
