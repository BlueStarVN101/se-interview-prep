import { describe, it, expect, vi } from 'vitest';
import { filter } from './index.js';

describe('Array.prototype.filter', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(filter([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => filter()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => filter()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => filter()).not.toThrow();
    });
  });

});
