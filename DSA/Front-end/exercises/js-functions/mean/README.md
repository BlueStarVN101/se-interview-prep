# Mean

**Difficulty:** Easy  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Mean** as described: Implement a function that finds the mean of the values inside an array

## 2. Requirements

### Functional requirements

- Accept an array of numbers and return their arithmetic mean.
- Handle empty arrays without throwing.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty array
- Single element
- Negative and fractional values
- Do not mutate input

## 3. Examples

```js
mean([1, 2, 3, 4]); // 2.5
mean([10, 20]); // 15
mean([5]); // 5
```

## 4. Implementation Notes

- Use a single pass with `reduce` or loop; watch floating-point precision in tests.
- Clarify empty-array behavior with your interviewer if not specified.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/mean
```