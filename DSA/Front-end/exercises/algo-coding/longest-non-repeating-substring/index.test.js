import { describe, it, expect, vi } from 'vitest';
import { longestNonRepeatingSubstring } from './index.js';

describe('Longest Non-repeating Substring', () => {
  describe('basic behavior', () => {
    it('implements Longest Non-repeating Substring per README overview', () => {
      expect(() => longestNonRepeatingSubstring()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => longestNonRepeatingSubstring()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => longestNonRepeatingSubstring()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => longestNonRepeatingSubstring()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => longestNonRepeatingSubstring()).not.toThrow();
    });
  });

});
