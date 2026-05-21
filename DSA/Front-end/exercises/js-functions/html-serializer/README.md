# HTML Serializer

**Difficulty:** Medium  
**Category:** js functions  
**Runnable in:** Node.js (Vitest)

## 1. Problem Overview

Implement **HTML Serializer** as described: Implement a function to serialize an object into an HTML string with indentation

## 2. Requirements

### Functional requirements

- Implement a function to serialize an object into an HTML string with indentation
- Traverse or query a DOM-like structure provided by tests.

### Constraints

- Avoid real `document` if tests use mocks; match test fixture shape.

### Edge cases to consider

- Nested nodes
- Empty trees
- Duplicate matches

## 3. Examples

Refer to `index.test.js` for concrete inputs/outputs. Add manual examples here as you refine the API.

## 4. Implementation Notes

- Clarify depth-first vs breadth-first traversal when walking trees.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- js-functions/html-serializer
```