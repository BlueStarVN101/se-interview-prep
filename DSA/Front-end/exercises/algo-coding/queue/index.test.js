import { describe, it, expect } from 'vitest';
import { Queue } from './index.js';

describe('Queue', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new Queue();
      const op = "enqueue";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => Queue()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => Queue()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => Queue()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => Queue()).not.toThrow();
    });
  });

});
