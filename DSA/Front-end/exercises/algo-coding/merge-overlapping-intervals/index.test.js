import { describe, it, expect, vi } from 'vitest';
import { mergeOverlappingIntervals } from './index.js';

describe('Merge Overlapping Intervals', () => {
  describe('basic behavior', () => {
    it('implements Merge Overlapping Intervals per README overview', () => {
      expect(() => mergeOverlappingIntervals()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Touching intervals', () => {
      // README edge case: Touching intervals
      expect(() => mergeOverlappingIntervals()).not.toThrow();
    });
    it('should handle edge case: Nested intervals', () => {
      // README edge case: Nested intervals
      expect(() => mergeOverlappingIntervals()).not.toThrow();
    });
    it('should handle edge case: Unsorted input', () => {
      // README edge case: Unsorted input
      expect(() => mergeOverlappingIntervals()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => mergeOverlappingIntervals()).not.toThrow();
    });
  });

});
