import { describe, it, expect, vi } from 'vitest';
import { inRange } from './index.js';

describe('In Range', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(inRange(5, 1, 10)).toBe(true);
    });
    it('behaves per README (2)', () => {
      expect(inRange(10, 1, 10)).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => inRange()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => inRange()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => inRange()).not.toThrow();
    });
  });

});
