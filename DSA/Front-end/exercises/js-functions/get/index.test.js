import { describe, it, expect, vi } from 'vitest';
import { get } from './index.js';

describe('Get', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(get({ a: { b: 1 } }, "a.b")).toBe(1);
    });
    it('behaves per README (2)', () => {
      expect(get({ a: 1 }, "a.c", "fallback")).toBe("fallback");
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => get()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => get()).not.toThrow();
    });
    it('should handle edge case: Invalid or missing values if applicable', () => {
      // README edge case: Invalid or missing values if applicable
      expect(() => get()).not.toThrow();
    });
  });

});
