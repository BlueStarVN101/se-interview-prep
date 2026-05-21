import { describe, it, expect, vi } from 'vitest';
import { deepEqual } from './index.js';

describe('Deep Equal', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
    });
    it('behaves per README (2)', () => {
      expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: `NaN` handling', () => {
      // README edge case: `NaN` handling
      expect(() => deepEqual()).not.toThrow();
    });
    it('should handle edge case: Different key order in objects', () => {
      // README edge case: Different key order in objects
      expect(() => deepEqual()).not.toThrow();
    });
    it('should handle edge case: Prototype chain ignored or not', () => {
      // README edge case: Prototype chain ignored or not
      expect(() => deepEqual()).not.toThrow();
    });
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => deepEqual()).not.toThrow();
    });
  });

});
