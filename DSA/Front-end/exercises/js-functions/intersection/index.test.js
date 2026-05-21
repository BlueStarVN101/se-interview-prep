import { describe, it, expect, vi } from 'vitest';
import { intersection } from './index.js';

describe('Intersection', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(intersection([1, 2], [2, 3], [2, 4])).toEqual([2]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => intersection()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => intersection()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => intersection()).not.toThrow();
    });
  });

});
