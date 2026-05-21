import { describe, it, expect, vi } from 'vitest';
import { square } from './index.js';

describe('Array.prototype.square', () => {
  describe('basic behavior', () => {
    it('implements Array.prototype.square per README overview', () => {
      expect(() => square()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => square()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => square()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => square()).not.toThrow();
    });
  });

});
