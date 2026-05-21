# Binary Search

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Binary Search** as described: Implement a function that performs binary search on an array of numbers

## 2. Requirements

### Functional requirements

- Find index of target in sorted array or return -1 / insertion index per tests.
- Implement a function that performs binary search on an array of numbers
- Choose appropriate data structure (stack, queue, heap, hash map).

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Minimum and maximum sizes
- Negative numbers if allowed
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Input: `nums = [-1,0,3,5,9], target = 9` → index `4`

## 4. Implementation Notes

- Use `left + (right-left)/2` mid to avoid overflow.
- Verify invariants with a small hand-drawn example.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/binary-search
```