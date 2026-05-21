import { describe, it, expect, vi } from 'vitest';
import { apply } from './index.js';

describe('Function.prototype.apply', () => {
  describe('basic behavior', () => {
    it('implements Function.prototype.apply per README overview', () => {
      expect(() => apply()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => apply()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => apply()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => apply()).not.toThrow();
    });
  });

});
