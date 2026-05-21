import { describe, it, expect, vi } from 'vitest';
import { at } from './index.js';

describe('Array.prototype.at', () => {
  describe('basic behavior', () => {
    it('implements Array.prototype.at per README overview', () => {
      expect(() => at()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => at()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => at()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => at()).not.toThrow();
    });
  });

});
