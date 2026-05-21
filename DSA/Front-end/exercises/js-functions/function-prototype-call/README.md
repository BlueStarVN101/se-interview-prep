# Function.prototype.call

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Function.prototype.call** as described: Implement the Function.prototype.call () function that calls the function with a given `this` value and provided arguments

## 2. Requirements

### Functional requirements

- Polyfill or replicate `Array.prototype.call` behavior per ECMAScript where tests apply.
- Respect sparse arrays, holes, and callback arguments (`element`, `index`, `array`).

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty array
- Sparse arrays
- Mutate vs copy per spec

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Compare your implementation to MDN for the specific method version.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/function-prototype-call
```