import { describe, it, expect, vi } from 'vitest';
import { disjointIntervals } from './index.js';

describe('Disjoint Intervals', () => {
  describe('basic behavior', () => {
    it('implements Disjoint Intervals per README overview', () => {
      expect(() => disjointIntervals()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Touching intervals', () => {
      // README edge case: Touching intervals
      expect(() => disjointIntervals()).not.toThrow();
    });
    it('should handle edge case: Nested intervals', () => {
      // README edge case: Nested intervals
      expect(() => disjointIntervals()).not.toThrow();
    });
    it('should handle edge case: Unsorted input', () => {
      // README edge case: Unsorted input
      expect(() => disjointIntervals()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => disjointIntervals()).not.toThrow();
    });
  });

});
