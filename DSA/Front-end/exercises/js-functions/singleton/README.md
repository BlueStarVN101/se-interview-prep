# Singleton

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Singleton** as described: Implement a Singleton class that ensures a class has only one instance while providing a global point of access to that instance

## 2. Requirements

### Functional requirements

- Implement a Singleton class that ensures a class has only one instance while providing a global point of access to that instance

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

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
npm run test:exercise -- js-functions/singleton
```