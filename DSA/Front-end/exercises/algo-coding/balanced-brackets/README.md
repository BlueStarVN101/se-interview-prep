# Balanced Brackets

**Difficulty:** Easy  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Balanced Brackets** as described: Implement a function to determine if a string contains balanced brackets

## 2. Requirements

### Functional requirements

- Return whether brackets `()`, `[]`, `{}` are properly nested and closed.
- Typically ignore non-bracket characters unless tests say otherwise.
- Implement a function to determine if a string contains balanced brackets
- Choose appropriate data structure (stack, queue, heap, hash map).

### Constraints

- O(n) time; O(n) extra space for the stack in the typical solution.
- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty string
- Only open brackets
- Mismatched closing type
- Minimum and maximum sizes
- Negative numbers if allowed
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Input: `"({[]})"` → `true`
Input: `"([)]"` → `false`

## 4. Implementation Notes

- Classic stack problem — push opens, pop and match on closes.
- Verify invariants with a small hand-drawn example.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/balanced-brackets
```