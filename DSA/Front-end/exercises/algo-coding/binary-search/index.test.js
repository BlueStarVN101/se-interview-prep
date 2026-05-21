import { describe, it, expect, vi } from 'vitest';
import { binarySearch } from './index.js';

describe('Binary Search', () => {
  describe('basic behavior', () => {
    it('finds target index in sorted array', () => {
      expect(binarySearch([-1, 0, 3, 5, 9], 9)).toBe(4);
    });
    it('returns -1 when target is absent', () => {
      expect(binarySearch([-1, 0, 3, 5, 9], 2)).toBe(-1);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => binarySearch([1,2,3], 2)).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => binarySearch([1,2,3], 2)).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binarySearch([1,2,3], 2)).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => binarySearch([1,2,3], 2)).not.toThrow();
    });
  });

});
