# Number Stream Median

**Difficulty:** Hard  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Number Stream Median** as described: Implement a function to find the median of a dynamic stream of integers

## 2. Requirements

### Functional requirements

- Implement a function to find the median of a dynamic stream of integers
- Choose appropriate data structure (stack, queue, heap, hash map).

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Minimum and maximum sizes
- Negative numbers if allowed
- Large inputs
- Degenerate structures
- Off-by-one boundaries

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Verify invariants with a small hand-drawn example.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.
- Break into sub-problems; validate invariants on paper before coding.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/number-stream-median
```