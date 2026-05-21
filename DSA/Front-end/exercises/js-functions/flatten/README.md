# Flatten

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Flatten** as described: Implement a function that recursively flattens an array into a single level deep

## 2. Requirements

### Functional requirements

- Recursively flatten nested arrays to depth 1.
- Preserve element order left-to-right.
- Implement a function that recursively flattens an array into a single level deep

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Already flat array
- Empty nested arrays
- Non-array elements at leaves
- Nested structures
- Reference equality vs deep equality
- Immutability expectations

## 3. Examples

Input: `[1, [2, [3]], 4]` → Output: `[1, 2, 3, 4]`
Input: `[[[1]]]` → Output: `[1]`

## 4. Implementation Notes

- Prefer iterative solutions if recursion depth is unbounded.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/flatten
```