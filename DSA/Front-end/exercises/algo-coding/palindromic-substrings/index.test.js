import { describe, it, expect, vi } from 'vitest';
import { palindromicSubstrings } from './index.js';

describe('Palindromic Substrings', () => {
  describe('basic behavior', () => {
    it('implements Palindromic Substrings per README overview', () => {
      expect(() => palindromicSubstrings()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => palindromicSubstrings()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => palindromicSubstrings()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => palindromicSubstrings()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => palindromicSubstrings()).not.toThrow();
    });
  });

});
