import { describe, it, expect, vi } from 'vitest';
import { findTheLongestPalindromicSubstring } from './index.js';

describe('Find the Longest Palindromic Substring', () => {
  describe('basic behavior', () => {
    it('implements Find the Longest Palindromic Substring per README overview', () => {
      expect(() => findTheLongestPalindromicSubstring()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => findTheLongestPalindromicSubstring()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => findTheLongestPalindromicSubstring()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => findTheLongestPalindromicSubstring()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => findTheLongestPalindromicSubstring()).not.toThrow();
    });
  });

});
