# Image Carousel

**Difficulty:** Medium  
**Category:** ui coding  
**Runnable in:** UI — implement in your preferred stack; enable Vitest when ready

## 1. Problem Overview

Build **Image Carousel** as described: Build an image carousel that displays a sequence of images

## 2. Requirements

### Functional requirements

- Build an image carousel that displays a sequence of images

### Constraints

- Match the exported API expected by `index.test.js` in this folder.
- Keep the solution self-contained in `index.js` — no cross-exercise imports.

### Edge cases to consider

- First/last slide
- Single image
- Rapid next clicks

## 3. Examples

Click next → slides to following image with transition (II/III).

## 4. Implementation Notes

- Preload adjacent images in production; for interview, CSS transform is enough.

## 5. UI Use Cases & Interactions

### UI Use Cases

**Navigate:** Next/prev controls cycle images; optional autoplay.
**Indicators:** Dots reflect active slide.

### Interaction Rules

Wrap from last to first only if spec requires looping.

### Accessibility (if applicable)

Pause autoplay on hover/focus; provide textual labels for controls.

## How to verify

Implement in `index.js`. Tests live in `index.test.js`.

```bash
npm run test:exercise -- ui-coding/image-carousel
```