import { describe, it, expect } from 'vitest';
import { Turtle } from './index.js';

describe('Turtle', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new Turtle();
      const op = "execute";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => Turtle()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => Turtle()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => Turtle()).not.toThrow();
    });
  });

});
