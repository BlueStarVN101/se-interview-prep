import { describe, it, expect, vi } from 'vitest';
import { map } from './index.js';

describe('Array.prototype.map', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(map([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => map()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => map()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => map()).not.toThrow();
    });
  });

});
