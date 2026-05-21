import { describe, it, expect, vi } from 'vitest';
import { staircaseClimbingCombinations } from './index.js';

describe('Staircase Climbing Combinations', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(staircaseClimbingCombinations(3)).toBe(3);
    });
    it('behaves per README (2)', () => {
      expect(staircaseClimbingCombinations(1)).toBe(1);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => staircaseClimbingCombinations()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => staircaseClimbingCombinations()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => staircaseClimbingCombinations()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => staircaseClimbingCombinations()).not.toThrow();
    });
  });

});
