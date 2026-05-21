# Promise.all

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Promise.all** as described: Implement the Promise.all () function that resolves to an array of results if all the input elements are resolved or rejects otherwise

## 2. Requirements

### Functional requirements

- Resolve with an array of results in input order when all promises fulfill.
- Reject with the first rejection reason; other results may be ignored.
- Implement the Promise.all () function that resolves to an array of results if all the input elements are resolved or rejects otherwise
- Return Promises that follow spec ordering and error propagation.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty iterable resolves to `[]`
- Non-promise values treated as fulfilled values per spec
- Empty input iterables
- Mixed resolve/reject timing
- Non-promise thenables if spec requires

## 3. Examples

Input: `[Promise.resolve(1), Promise.resolve(2)]` → `[1, 2]`
If any rejects → rejected promise with that reason.

## 4. Implementation Notes

- Never swallow rejections; preserve first-rejection semantics for `all`/`race` variants.
- Consider microtask ordering when chaining.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/promise-all
```