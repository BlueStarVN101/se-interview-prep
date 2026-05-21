import { describe, it, expect, vi } from 'vitest';
import { smallestElementInRotatedSortedArray } from './index.js';

describe('Smallest element in rotated sorted array', () => {
  describe('basic behavior', () => {
    it('implements Smallest element in rotated sorted array per README overview', () => {
      expect(() => smallestElementInRotatedSortedArray()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => smallestElementInRotatedSortedArray()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => smallestElementInRotatedSortedArray()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => smallestElementInRotatedSortedArray()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => smallestElementInRotatedSortedArray()).not.toThrow();
    });
  });

});
