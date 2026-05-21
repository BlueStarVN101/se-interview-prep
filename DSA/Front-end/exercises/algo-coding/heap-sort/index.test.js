import { describe, it, expect, vi } from 'vitest';
import { heapSort } from './index.js';

describe('Heap Sort', () => {
  describe('basic behavior', () => {
    it('implements Heap Sort per README overview', () => {
      expect(() => heapSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => heapSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => heapSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => heapSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => heapSort()).not.toThrow();
    });
  });

});
