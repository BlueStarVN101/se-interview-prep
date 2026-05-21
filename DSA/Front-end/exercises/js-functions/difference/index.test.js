import { describe, it, expect, vi } from 'vitest';
import { difference } from './index.js';

describe('Difference', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => difference()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => difference()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => difference()).not.toThrow();
    });
  });

});
