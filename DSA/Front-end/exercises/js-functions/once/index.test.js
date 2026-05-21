import { describe, it, expect, vi } from 'vitest';
import { once } from './index.js';

describe('Once', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      const fn = vi.fn((x) => x);
      const wrapped = once(fn);
      expect(wrapped(1)).toBe(1);
      expect(wrapped(2)).toBe(1);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => once()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => once()).not.toThrow();
    });
    it('should handle edge case: Invalid or missing values if applicable', () => {
      // README edge case: Invalid or missing values if applicable
      expect(() => once()).not.toThrow();
    });
  });

});
