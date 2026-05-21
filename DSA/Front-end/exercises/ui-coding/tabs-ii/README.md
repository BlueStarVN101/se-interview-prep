# Tabs II

**Difficulty:** Medium  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Tabs II** as described: Build a semi-accessible tabs component that has the right ARIA roles, states, and properties

## 2. Requirements

### Functional requirements

- Build a semi-accessible tabs component that has the right ARIA roles, states, and properties
- Show one tab panel at a time; tab list reflects selection.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- Disabled tab
- Dynamic tabs
- Controlled vs uncontrolled selection

## 3. Examples

Select "Profile" tab → only Profile panel visible; tab has selected styling.

## 4. Implementation Notes

- Keep tab buttons in a single tablist container.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Initial:** First tab selected.
**Select tab:** Click or keyboard activates tab → corresponding panel unhidden.
**Focus:** Tab key moves into tab list; arrows switch tabs when fully accessible.

### Interaction Rules

Activating a tab must not reload page.
Inactive panels are hidden from view (and ideally from accessibility tree).

### Accessibility (if applicable)

`role="tablist"`, tabs `role="tab"`, panels `role="tabpanel"`.
`aria-selected`, `tabIndex` roving focus for level II/III.


## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/tabs-ii
```