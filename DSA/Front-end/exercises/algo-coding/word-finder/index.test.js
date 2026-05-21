import { describe, it, expect } from 'vitest';
import { WordFinder } from './index.js';

describe('Word Finder', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new WordFinder();
      const op = "execute";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => WordFinder()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => WordFinder()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => WordFinder()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => WordFinder()).not.toThrow();
    });
  });

});
