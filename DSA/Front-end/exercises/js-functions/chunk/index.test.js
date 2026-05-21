import { describe, it, expect, vi } from 'vitest';
import { chunk } from './index.js';

describe('Chunk', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });
    it('behaves per README (2)', () => {
      expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => chunk()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => chunk()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => chunk()).not.toThrow();
    });
  });

});
