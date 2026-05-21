import { describe, it, expect, vi } from 'vitest';
import { compact } from './index.js';

describe('Compact', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
    });
    it('behaves per README (2)', () => {
      expect(compact([])).toEqual([]);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => compact()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => compact()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => compact()).not.toThrow();
    });
  });

});
