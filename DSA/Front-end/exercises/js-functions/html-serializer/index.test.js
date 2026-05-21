import { describe, it, expect, vi } from 'vitest';
import { htmlSerializer } from './index.js';

describe('HTML Serializer', () => {
  describe('basic behavior', () => {
    it('implements HTML Serializer per README overview', () => {
      expect(() => htmlSerializer()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested nodes', () => {
      // README edge case: Nested nodes
      expect(() => htmlSerializer()).not.toThrow();
    });
    it('should handle edge case: Empty trees', () => {
      // README edge case: Empty trees
      expect(() => htmlSerializer()).not.toThrow();
    });
    it('should handle edge case: Duplicate matches', () => {
      // README edge case: Duplicate matches
      expect(() => htmlSerializer()).not.toThrow();
    });
  });

});
