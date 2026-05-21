# Binary Search Tree Lowest Common Ancestor

**Difficulty:** Medium  
**Category:** algo coding  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **Binary Search Tree Lowest Common Ancestor** as described: Implement a function to find the LCA in a binary search tree

## 2. Requirements

### Functional requirements

- Implement a function to find the LCA in a binary search tree
- Define node shape used by tests; traverse recursively or iteratively.

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.
- Pure Node/Vitest environment — no browser APIs unless the problem explicitly requires DOM.

### Edge cases to consider

- Empty tree
- Skewed tree
- Duplicate keys in BST
- Empty or minimal input
- Single-element input
- Invalid or missing values if applicable

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Clarify preorder/inorder/postorder when rebuilding or serializing.
- Read tests first to learn the exact signature and edge-case contract.
- State time/space complexity aloud in interviews when relevant.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- algo-coding/binary-search-tree-lowest-common-ancestor
```