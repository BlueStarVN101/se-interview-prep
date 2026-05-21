# Undoable Counter

**Difficulty:** Hard  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Undoable Counter** as described: Build a counter with a history of the values and ability to undo/redo actions

## 2. Requirements

### Functional requirements

- Build a counter with a history of the values and ability to undo/redo actions

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Rapid clicks
- Pause/resume
- Overflow display

## 3. Examples

Click "+" → count increments immediately on screen.

## 4. Implementation Notes

- Use `setInterval`/`requestAnimationFrame` judiciously; clean up on unmount.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Idle:** Display initial value/time.
**Interact:** Buttons adjust state; UI updates synchronously.
**Timers:** Automatic transitions (traffic light) without user input.

### Interaction Rules

Buttons disabled when action invalid (e.g., cannot go below zero if spec says).

### Accessibility (if applicable)

Buttons have accessible names; live regions for changing values if needed.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/undoable-counter
```