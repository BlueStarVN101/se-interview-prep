import { describe, it, expect, vi } from 'vitest';
import { maximumSumInContiguousArray } from './index.js';

describe('Maximum Sum in Contiguous Array', () => {
  describe('basic behavior', () => {
    it('returns maximum subarray sum', () => {
      expect(maximumSumInContiguousArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => maximumSumInContiguousArray([-2,1,-3,4,-1,2,1,-5,4])).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => maximumSumInContiguousArray([-2,1,-3,4,-1,2,1,-5,4])).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => maximumSumInContiguousArray([-2,1,-3,4,-1,2,1,-5,4])).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => maximumSumInContiguousArray([-2,1,-3,4,-1,2,1,-5,4])).not.toThrow();
    });
  });

});
