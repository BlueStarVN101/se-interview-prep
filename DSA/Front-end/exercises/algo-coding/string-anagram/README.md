# String Anagram

**Difficulty:** Easy  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **String Anagram** as described: Implement a function to determine if two strings are anagram of each other

## 2. Requirements

### Functional requirements

- Implement a function to determine if two strings are anagram of each other
- Optimize from brute force using sliding window, DP, or hash maps.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty string
- All same character
- Unicode if mentioned
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Articulate DP state transition before coding hard variants.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/string-anagram
```