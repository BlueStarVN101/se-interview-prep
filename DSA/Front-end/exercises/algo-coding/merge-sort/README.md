# Merge Sort

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Merge Sort** as described: Implement a function that performs a recursive merge sort

## 2. Requirements

### Functional requirements

- Implement a function that performs a recursive merge sort
- Sort in-place or return new array per tests; state stability requirements if any.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Already sorted
- Duplicates
- Single element
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Know time complexity: O(n log n) typical for comparison sorts.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/merge-sort
```