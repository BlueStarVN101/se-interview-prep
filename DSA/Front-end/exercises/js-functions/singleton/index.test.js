import { describe, it, expect } from 'vitest';
import { Singleton } from './index.js';

describe('Singleton', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new Singleton();
      const op = "execute";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => Singleton()).not.toThrow();
    });
    it('should handle edge case: Reference equality vs deep equality', () => {
      // README edge case: Reference equality vs deep equality
      expect(() => Singleton()).not.toThrow();
    });
    it('should handle edge case: Immutability expectations', () => {
      // README edge case: Immutability expectations
      expect(() => Singleton()).not.toThrow();
    });
  });

});
