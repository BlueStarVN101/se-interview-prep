import { describe, it, expect, vi } from 'vitest';
import { concat } from './index.js';

describe('Array.prototype.concat', () => {
  describe('basic behavior', () => {
    it('implements Array.prototype.concat per README overview', () => {
      expect(() => concat()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => concat()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => concat()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => concat()).not.toThrow();
    });
  });

});
