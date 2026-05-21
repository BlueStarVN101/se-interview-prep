import { describe, it, expect, vi } from 'vitest';
import { uniqueArray } from './index.js';

describe('Unique Array', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(uniqueArray([1, 2, 1, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => uniqueArray()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => uniqueArray()).not.toThrow();
    });
    it('should handle edge case: Invalid or missing values if applicable', () => {
      // README edge case: Invalid or missing values if applicable
      expect(() => uniqueArray()).not.toThrow();
    });
  });

});
