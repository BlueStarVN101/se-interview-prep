# Curry

**Difficulty:** Hard  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Curry** as described: Implement a function that converts a multi-argument function into a chain of unary calls

## 2. Requirements

### Functional requirements

- Implement a function that converts a multi-argument function into a chain of unary calls

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Nested structures
- Reference equality vs deep equality
- Immutability expectations

## 3. Examples

Curried add: `const add = curry((a,b,c) => a+b+c); add(1)(2)(3) === 6`

## 4. Implementation Notes

- Clarify arity detection vs manual arity argument in follow-ups.
- Prefer iterative solutions if recursion depth is unbounded.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/curry
```