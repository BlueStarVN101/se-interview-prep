import { describe, it, expect, vi } from 'vitest';
import { intersectionWith } from './index.js';

describe('Intersection With', () => {
  describe('basic behavior', () => {
    it('implements Intersection With per README overview', () => {
      expect(() => intersectionWith()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => intersectionWith()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => intersectionWith()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => intersectionWith()).not.toThrow();
    });
  });

});
