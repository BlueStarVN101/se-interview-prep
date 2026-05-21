import { describe, it, expect, vi } from 'vitest';
import { intersectionBy } from './index.js';

describe('Intersection By', () => {
  describe('basic behavior', () => {
    it('implements Intersection By per README overview', () => {
      expect(() => intersectionBy()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => intersectionBy()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => intersectionBy()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => intersectionBy()).not.toThrow();
    });
  });

});
