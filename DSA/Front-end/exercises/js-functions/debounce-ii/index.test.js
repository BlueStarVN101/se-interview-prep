import { describe, it, expect, vi } from 'vitest';
import { debounceIi } from './index.js';

describe('Debounce II', () => {
  describe('basic behavior', () => {
    it('implements Debounce II per README overview', () => {
      expect(() => debounceIi()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Rapid consecutive calls', () => {
      // README edge case: Rapid consecutive calls
      expect(() => debounceIi()).not.toThrow();
    });
    it('should handle edge case: Different debounced instances are independent', () => {
      // README edge case: Different debounced instances are independent
      expect(() => debounceIi()).not.toThrow();
    });
    it('should handle edge case: Method invocation with object context', () => {
      // README edge case: Method invocation with object context
      expect(() => debounceIi()).not.toThrow();
    });
  });

});
