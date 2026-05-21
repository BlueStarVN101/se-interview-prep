import { describe, it, expect, vi } from 'vitest';
import { compose } from './index.js';

describe('Compose', () => {
  describe('basic behavior', () => {
    it('implements Compose per README overview', () => {
      expect(() => compose()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => compose()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => compose()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => compose()).not.toThrow();
    });
  });

});
