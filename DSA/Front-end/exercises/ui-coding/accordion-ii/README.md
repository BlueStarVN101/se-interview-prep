# Accordion II

**Difficulty:** Easy  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Accordion II** as described: Build an accessible accordion component that has the right ARIA roles, states, and properties

## 2. Requirements

### Functional requirements

- Build an accessible accordion component that has the right ARIA roles, states, and properties
- Render a vertical list of sections; each has a header control and collapsible panel.
- Support expand/collapse per section with correct open state.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- All collapsed initially
- Rapid toggle clicks
- Dynamic section list

## 3. Examples

Click header "FAQ 1" → panel 1 expands, others collapse. Click again → panel 1 collapses.

## 4. Implementation Notes

- Prefer semantic `<button>` headers instead of clickable `<div>`s.
- Animate height carefully to avoid layout thrash in interviews.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Initial render:** First section collapsed (or one expanded per spec); headers keyboard-focusable.
**Expand:** User activates header → panel becomes visible; `aria-expanded` updates.
**Collapse:** Second activation on open header hides panel.
**Keyboard:** Up/Down or Home/End move focus between headers per ARIA accordion pattern.

### Interaction Rules

Header click toggles only its panel (respect single-open vs multi-open rules).
Do not navigate away or submit forms when toggling.
Panel content remains in DOM (hidden) unless lazy-mount is specified.

### Accessibility (if applicable)

Roles: `region` or grouped sections with `heading` + `button` controls.
`aria-expanded`, `aria-controls`, stable `id` wiring between header and panel.
At minimum correct roles/states for Accordion II.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/accordion-ii
```