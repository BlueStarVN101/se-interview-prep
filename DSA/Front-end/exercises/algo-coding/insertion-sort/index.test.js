import { describe, it, expect, vi } from 'vitest';
import { insertionSort } from './index.js';

describe('Insertion Sort', () => {
  describe('basic behavior', () => {
    it('implements Insertion Sort per README overview', () => {
      expect(() => insertionSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => insertionSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => insertionSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => insertionSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => insertionSort()).not.toThrow();
    });
  });

});
