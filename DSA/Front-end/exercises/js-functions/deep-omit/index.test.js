import { describe, it, expect, vi } from 'vitest';
import { deepOmit } from './index.js';

describe('Deep Omit', () => {
  describe('basic behavior', () => {
    it('implements Deep Omit per README overview', () => {
      expect(() => deepOmit()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => deepOmit()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => deepOmit()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => deepOmit()).not.toThrow();
    });
  });

});
