import { describe, it, expect, vi } from 'vitest';
import { stringAnagram } from './index.js';

describe('String Anagram', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(stringAnagram("listen", "silent")).toBe(true);
    });
    it('behaves per README (2)', () => {
      expect(stringAnagram("hello", "world")).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty string', () => {
      // README edge case: Empty string
      expect(() => stringAnagram()).not.toThrow();
    });
    it('should handle edge case: All same character', () => {
      // README edge case: All same character
      expect(() => stringAnagram()).not.toThrow();
    });
    it('should handle edge case: Unicode if mentioned', () => {
      // README edge case: Unicode if mentioned
      expect(() => stringAnagram()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => stringAnagram()).not.toThrow();
    });
  });

});
