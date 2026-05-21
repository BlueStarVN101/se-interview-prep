# Modal Dialog II

**Difficulty:** Medium  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Modal Dialog II** as described: Build a semi-accessible modal dialog component that has the right ARIA roles, states, and properties

## 2. Requirements

### Functional requirements

- Build a semi-accessible modal dialog component that has the right ARIA roles, states, and properties
- Open/close dialog; trap focus while open; restore focus on close.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Nested dialogs
- Long scrollable content
- Opening while another modal open

## 3. Examples

Click "Delete" → modal opens with confirm/cancel; Esc closes and returns focus to trigger.

## 4. Implementation Notes

- Use portal for overlay; lock body scroll if required.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Open:** Trigger shows modal + backdrop.
**Close:** Explicit buttons, backdrop click (if allowed), Escape.
**Focus:** First focusable element focused on open.

### Interaction Rules

Background content inert while open.
Do not leave invisible focusable elements behind overlay.

### Accessibility (if applicable)

`role="dialog"` + `aria-modal="true"`.
Label via `aria-labelledby` / `aria-describedby`.
Focus trap and restore; Esc handler for higher levels.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/modal-dialog-ii
```