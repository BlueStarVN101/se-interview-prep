# Matrix Spiral Traversal

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Matrix Spiral Traversal** as described: Implement a function to traverse the matrix in spiral order

## 2. Requirements

### Functional requirements

- Implement a function to traverse the matrix in spiral order
- Use 4-/8-directional movement as specified; bounds-check neighbors.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- 1x1 grid
- All blocked cells
- Visit marking to avoid cycles
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- BFS for shortest path; DFS for exploration — pick based on problem.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/matrix-spiral-traversal
```