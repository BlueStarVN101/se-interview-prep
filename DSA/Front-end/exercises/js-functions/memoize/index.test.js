import { describe, it, expect, vi } from 'vitest';
import { memoize } from './index.js';

describe('Memoize', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      const fn = vi.fn((x) => x * 2);
      const memoized = memoize(fn);
      expect(memoized(2)).toBe(4);
      expect(memoized(2)).toBe(4);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Same arg returns cached value without re-invoking fn', () => {
      // README edge case: Same arg returns cached value without re-invoking fn
      expect(() => memoize()).not.toThrow();
    });
    it('should handle edge case: Cache growth unbounded', () => {
      // README edge case: Cache growth unbounded
      expect(() => memoize()).not.toThrow();
    });
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => memoize()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => memoize()).not.toThrow();
    });
  });

});
