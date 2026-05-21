# Cancellable Timeout

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Cancellable Timeout** as described: Implement a function that acts like setTimeout but returns a function to cancel the pending callback

## 2. Requirements

### Functional requirements

- Implement a function that acts like setTimeout but returns a function to cancel the pending callback

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Clearing timers
- Overlapping schedules
- No-op cancel

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Use Vitest fake timers in tests; be explicit about trailing vs leading behavior.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/cancellable-timeout
```