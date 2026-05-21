# Debounce

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Debounce** as described: Implement a function that delays execution until calls have stopped for a given time

## 2. Requirements

### Functional requirements

- Return a wrapped function that delays calling `fn` until `wait` ms after the last invocation.
- Pass the latest arguments from the final call in a burst.
- Preserve `this` when the debounced function is used as a method.

### Constraints

- Use `setTimeout` / `clearTimeout` only — no lodash/underscore.
- Each new call cancels the previous scheduled invocation.

### Edge cases to consider

- Rapid consecutive calls
- Different debounced instances are independent
- Method invocation with object context

## 3. Examples

```js
const log = debounce((msg) => console.log(msg), 100);
log('a');
log('b');
// Only 'b' is logged, ~100ms after the last call
```

## 4. Implementation Notes

- Store timeout id in closure; clear before scheduling anew.
- Interview follow-up: cancel/flush variants (see Debounce II).

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/debounce
```