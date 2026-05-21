# Linked List Reversal

**Difficulty:** Easy  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Linked List Reversal** as described: Implement a function to reverse a linked list

## 2. Requirements

### Functional requirements

- Implement a function to reverse a linked list
- Handle `null` head; mutate pointers carefully.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Single node
- Cycles
- Tail deletion
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Input: `1→2→3→null` → `3→2→1→null`

## 4. Implementation Notes

- Iterative three-pointer approach is preferred in interviews.
- Use dummy head node technique when simplifying edge cases.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/linked-list-reversal
```