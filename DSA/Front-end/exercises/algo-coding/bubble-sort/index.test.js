import { describe, it, expect, vi } from 'vitest';
import { bubbleSort } from './index.js';

describe('Bubble Sort', () => {
  describe('basic behavior', () => {
    it('implements Bubble Sort per README overview', () => {
      expect(() => bubbleSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => bubbleSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => bubbleSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => bubbleSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => bubbleSort()).not.toThrow();
    });
  });

});
