# Dijkstra's Algorithm

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Dijkstra's Algorithm** as described: Implement Dijkstra's algorithm to find the shortest paths from a source vertex in a graph represented as an adjacency list.

## 2. Requirements

### Functional requirements

- Implement Dijkstra's algorithm to find the shortest paths from a source vertex in a graph represented as an adjacency list.
- Represent graph as adjacency list/matrix per test fixtures.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Disconnected components
- Cycles
- Self-loops
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- State visited set; watch stack overflow on deep DFS.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/dijkstras-algorithm
```