# Memoize

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Memoize** as described: Implement a function that returns a memoized version of a function which accepts a single argument

## 2. Requirements

### Functional requirements

- Cache results by single serializable/primitive argument key.
- Implement a function that returns a memoized version of a function which accepts a single argument

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Same arg returns cached value without re-invoking fn
- Cache growth unbounded
- Nested structures
- Reference equality vs deep equality
- Immutability expectations

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Prefer iterative solutions if recursion depth is unbounded.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/memoize
```