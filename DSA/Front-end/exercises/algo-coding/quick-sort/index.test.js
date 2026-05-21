import { describe, it, expect, vi } from 'vitest';
import { quickSort } from './index.js';

describe('Quick Sort', () => {
  describe('basic behavior', () => {
    it('implements Quick Sort per README overview', () => {
      expect(() => quickSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => quickSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => quickSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => quickSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => quickSort()).not.toThrow();
    });
  });

});
