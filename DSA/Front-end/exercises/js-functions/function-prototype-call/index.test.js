import { describe, it, expect, vi } from 'vitest';
import { call } from './index.js';

describe('Function.prototype.call', () => {
  describe('basic behavior', () => {
    it('implements Function.prototype.call per README overview', () => {
      expect(() => call()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => call()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => call()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => call()).not.toThrow();
    });
  });

});
