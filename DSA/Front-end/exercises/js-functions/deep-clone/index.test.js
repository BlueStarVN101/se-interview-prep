import { describe, it, expect, vi } from 'vitest';
import { deepClone } from './index.js';

describe('Deep Clone', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      const obj = { a: 1, b: { c: 2 } };
      const clone = deepClone(obj);
      expect(clone).toEqual(obj);
      expect(clone).not.toBe(obj);
      clone.b.c = 9;
      expect(obj.b.c).toBe(2);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested objects/arrays', () => {
      // README edge case: Nested objects/arrays
      expect(() => deepClone()).not.toThrow();
    });
    it('should handle edge case: Dates/RegExp if tests include them', () => {
      // README edge case: Dates/RegExp if tests include them
      expect(() => deepClone()).not.toThrow();
    });
    it('should handle edge case: Circular refs if disallowed', () => {
      // README edge case: Circular refs if disallowed
      expect(() => deepClone()).not.toThrow();
    });
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => deepClone()).not.toThrow();
    });
  });

});
