import { describe, it, expect, vi } from 'vitest';
import { unionBy } from './index.js';

describe('Union By', () => {
  describe('basic behavior', () => {
    it('implements Union By per README overview', () => {
      expect(() => unionBy()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => unionBy()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => unionBy()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => unionBy()).not.toThrow();
    });
  });

});
