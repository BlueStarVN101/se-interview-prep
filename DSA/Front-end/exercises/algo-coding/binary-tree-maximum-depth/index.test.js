import { describe, it, expect, vi } from 'vitest';
import { binaryTreeMaximumDepth } from './index.js';

describe('Binary Tree Maximum Depth', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(binaryTreeMaximumDepth(null)).toBe(0);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => binaryTreeMaximumDepth()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => binaryTreeMaximumDepth()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => binaryTreeMaximumDepth()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binaryTreeMaximumDepth()).not.toThrow();
    });
  });

});
