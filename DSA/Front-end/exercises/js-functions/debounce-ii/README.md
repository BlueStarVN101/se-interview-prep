# Debounce II

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Debounce II** as described: Implement a debounce function that comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke them

## 2. Requirements

### Functional requirements

- Return a wrapped function that delays calling `fn` until `wait` ms after the last invocation.
- Pass the latest arguments from the final call in a burst.
- Preserve `this` when the debounced function is used as a method.
- Expose `.cancel()` to abort a pending invocation without running `fn`.
- Expose `.flush()` to invoke `fn` immediately with the latest pending args, then clear the timer.

### Constraints

- Use `setTimeout` / `clearTimeout` only — no lodash/underscore.
- Each new call cancels the previous scheduled invocation.

### Edge cases to consider

- Rapid consecutive calls
- Different debounced instances are independent
- Method invocation with object context

## 3. Examples

Burst: `debounced(a); debounced(b);` → only `fn(b)` runs once after `wait`.
Timer reset: each call restarts the countdown.

## 4. Implementation Notes

- Store timeout id in closure; clear before scheduling anew.
- Interview follow-up: cancel/flush variants (see Debounce II).
- Decide whether `flush` runs when nothing is scheduled — document your choice.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/debounce-ii
```