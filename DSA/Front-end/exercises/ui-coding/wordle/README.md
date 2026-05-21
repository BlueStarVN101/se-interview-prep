# Wordle

**Difficulty:** Hard  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Wordle** as described: Build Wordle, the word-guessing game that took the world by storm

## 2. Requirements

### Functional requirements

- Build Wordle, the word-guessing game that took the world by storm
- Component should be reusable and state-driven.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Empty states
- Loading/error
- Responsive narrow viewport

## 3. Examples

Walk through the primary user journey for **Wordle** step by step in your README notes as you implement.

## 4. Implementation Notes

- Sketch component hierarchy and state on paper before coding.
- Explain tradeoffs: controlled vs uncontrolled, lifting state up.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Initial render:** Placeholder/empty state per spec.
**Core interaction:** User performs the main action described in the problem (Build Wordle, the word-guessing game that took the world by storm).
**Feedback:** UI updates immediately to reflect new state.

### Interaction Rules

Each control performs one clear action.
Avoid full page reloads.
Do not lose user input on unrelated updates.

### Accessibility (if applicable)

All interactive elements keyboard reachable with visible focus.
Use semantic HTML landmarks and labels.
Add ARIA only where semantics are insufficient.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/wordle
```