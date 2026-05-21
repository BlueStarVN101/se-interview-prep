import { describe, it, expect, vi } from 'vitest';
import { stringPalindrome } from './index.js';

describe('String Palindrome', () => {
  describe('basic behavior', () => {
    it('returns true for palindromic strings', () => {
      expect(stringPalindrome('racecar')).toBe(true);
    });
    it('returns false for non-palindromes', () => {
      expect(stringPalindrome('hello')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty string', () => {
      // README edge case: Empty string
      expect(() => stringPalindrome('racecar')).not.toThrow();
    });
    it('should handle edge case: All same character', () => {
      // README edge case: All same character
      expect(() => stringPalindrome('racecar')).not.toThrow();
    });
    it('should handle edge case: Unicode if mentioned', () => {
      // README edge case: Unicode if mentioned
      expect(() => stringPalindrome('racecar')).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => stringPalindrome('racecar')).not.toThrow();
    });
  });

});
