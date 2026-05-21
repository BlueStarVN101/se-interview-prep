# Delete Nth Node from End of Linked List

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Delete Nth Node from End of Linked List** as described: Implement a function to delete the nth node from the end of a linked list

## 2. Requirements

### Functional requirements

- Implement a function to delete the nth node from the end of a linked list
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

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Use dummy head node technique when simplifying edge cases.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/delete-nth-node-from-end-of-linked-list
```