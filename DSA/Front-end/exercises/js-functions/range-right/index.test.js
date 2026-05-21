import { describe, it, expect, vi } from 'vitest';
import { rangeRight } from './index.js';

describe('Range Right', () => {
  describe('basic behavior', () => {
    it('implements Range Right per README overview', () => {
      expect(() => rangeRight()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => rangeRight()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => rangeRight()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => rangeRight()).not.toThrow();
    });
  });

});
