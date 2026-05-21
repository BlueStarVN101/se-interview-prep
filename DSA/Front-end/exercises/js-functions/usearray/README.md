# useArray

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **useArray** as described: Implement a hook that manages an array of items.

## 2. Requirements

### Functional requirements

- Implement a hook that manages an array of items.
- Expose a hook-shaped API (or testable state machine) consistent with React conventions.
- Return stable tuple/object shape across renders where tests expect it.

### Constraints

- If not using React in tests, implement core state logic in plain functions the tests can call.
- Avoid stale closures in effects/subscriptions.

### Edge cases to consider

- Initial mount vs update
- Unmount cleanup
- Strict Mode double-invoke (if targeting React)

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Separate “hook API design” from “state transition rules” when explaining aloud.
- Mention dependency arrays, cleanup, and referential stability for follow-ups.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/usearray
```