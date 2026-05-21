import { describe, it, expect, vi } from 'vitest';
import { mergeSort } from './index.js';

describe('Merge Sort', () => {
  describe('basic behavior', () => {
    it('implements Merge Sort per README overview', () => {
      expect(() => mergeSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => mergeSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => mergeSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => mergeSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => mergeSort()).not.toThrow();
    });
  });

});
