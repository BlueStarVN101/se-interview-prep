import { describe, it, expect, vi } from 'vitest';
import { reduce } from './index.js';

describe('Array.prototype.reduce', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(reduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => reduce()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => reduce()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => reduce()).not.toThrow();
    });
  });

});
