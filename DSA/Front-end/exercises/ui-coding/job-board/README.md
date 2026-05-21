# Job Board

**Difficulty:** Easy  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Job Board** as described: Build a job board that displays the latest job postings from Hacker News

## 2. Requirements

### Functional requirements

- Build a job board that displays the latest job postings from Hacker News
- Reflect loading/success/error states for async actions when applicable.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Empty list
- Validation errors
- Duplicate submissions

## 3. Examples

Add task "Buy milk" → appears in list; delete removes without full page reload.

## 4. Implementation Notes

- Optimistic UI vs wait-for-server — pick one and explain tradeoffs.

## 5. UI Use Cases & Interactions

### UI Use Cases

**CRUD flows:** Create item, list updates, delete/edit removes or updates row.
**Forms:** Validation messages on blur/submit; disable submit while pending.

### Interaction Rules

Prevent double-submit while request in flight.
Preserve keyboard access to all actions.

### Accessibility (if applicable)

Label every input; announce errors with `aria-live` where appropriate.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/job-board
```