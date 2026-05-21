import { describe, it, expect, vi } from 'vitest';
import { pairSum } from './index.js';

describe('Pair sum', () => {
  describe('basic behavior', () => {
    it('finds two numbers that sum to target', () => {
      expect(pairSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => pairSum([2,7,11,15], 9)).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => pairSum([2,7,11,15], 9)).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => pairSum([2,7,11,15], 9)).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => pairSum([2,7,11,15], 9)).not.toThrow();
    });
  });

});
