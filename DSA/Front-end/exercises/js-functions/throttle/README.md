# Throttle

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Throttle** as described: Implement a function that limits how often a function can run

## 2. Requirements

### Functional requirements

- Limit how often `fn` executes — at most once per `wait` window.
- Typically invoke on the leading edge, trailing edge, or both (clarify in tests).

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Burst calls within window
- Final trailing call after burst ends

## 3. Examples

Calls every 100ms max: burst of 10 calls in 50ms → ~1 execution, then possibly trailing call.

## 4. Implementation Notes

- Do not confuse throttle with debounce: throttle guarantees periodic execution under load.
- GreatFrontEnd may specify leading/trailing — align with `index.test.js`.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/throttle
```