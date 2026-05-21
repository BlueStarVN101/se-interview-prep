# Deep Clone

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Deep Clone** as described: Implement a function that performs a deep copy of a JSON-serializable value

## 2. Requirements

### Functional requirements

- Implement a function that performs a deep copy of a JSON-serializable value

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Nested objects/arrays
- Dates/RegExp if tests include them
- Circular refs if disallowed
- Nested structures
- Reference equality vs deep equality
- Immutability expectations

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- JSON parse/stringify only works for JSON-serializable data — confirm test scope.
- Prefer iterative solutions if recursion depth is unbounded.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/deep-clone
```