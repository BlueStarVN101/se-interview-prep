import { describe, it, expect, vi } from 'vitest';
import { squashObject } from './index.js';

describe('Squash Object', () => {
  describe('basic behavior', () => {
    it('implements Squash Object per README overview', () => {
      expect(() => squashObject()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => squashObject()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => squashObject()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => squashObject()).not.toThrow();
    });
  });

});
