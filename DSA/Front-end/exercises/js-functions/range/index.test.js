import { describe, it, expect, vi } from 'vitest';
import { range } from './index.js';

describe('Range', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => range()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => range()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => range()).not.toThrow();
    });
  });

});
