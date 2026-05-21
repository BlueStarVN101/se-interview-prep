# Promise Merge

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Promise Merge** as described: Implement a function to merge the results of two promises into a single value

## 2. Requirements

### Functional requirements

- Implement a function to merge the results of two promises into a single value
- Return Promises that follow spec ordering and error propagation.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty input iterables
- Mixed resolve/reject timing
- Non-promise thenables if spec requires

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Never swallow rejections; preserve first-rejection semantics for `all`/`race` variants.
- Consider microtask ordering when chaining.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/promise-merge
```