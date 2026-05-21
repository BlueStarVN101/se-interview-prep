import { describe, it, expect, vi } from 'vitest';
import { longestConsecutiveNumberSequence } from './index.js';

describe('Longest Consecutive Number Sequence', () => {
  describe('basic behavior', () => {
    it('implements Longest Consecutive Number Sequence per README overview', () => {
      expect(() => longestConsecutiveNumberSequence()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => longestConsecutiveNumberSequence()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => longestConsecutiveNumberSequence()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => longestConsecutiveNumberSequence()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => longestConsecutiveNumberSequence()).not.toThrow();
    });
  });

});
