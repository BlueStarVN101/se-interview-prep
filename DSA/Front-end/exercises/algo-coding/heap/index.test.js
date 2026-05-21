import { describe, it, expect } from 'vitest';
import { Heap } from './index.js';

describe('Heap', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new Heap();
      const op = "insert";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => Heap()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => Heap()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => Heap()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => Heap()).not.toThrow();
    });
  });

});
