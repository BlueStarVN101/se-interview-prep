# Transfer List II

**Difficulty:** Medium  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Transfer List II** as described: Build a component that allows transferring items between two lists, bulk selection/unselection of items, and adding new items

## 2. Requirements

### Functional requirements

- Build a component that allows transferring items between two lists, bulk selection/unselection of items, and adding new items
- Component should be reusable and state-driven.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Empty states
- Loading/error
- Responsive narrow viewport

## 3. Examples

Walk through the primary user journey for **Transfer List II** step by step in your README notes as you implement.

## 4. Implementation Notes

- Sketch component hierarchy and state on paper before coding.
- Explain tradeoffs: controlled vs uncontrolled, lifting state up.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Initial render:** Placeholder/empty state per spec.
**Core interaction:** User performs the main action described in the problem (Build a component that allows transferring items between two lists, bulk selection/unselection of items, and adding new items).
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
npm run test:exercise -- ui-coding/transfer-list-ii
```