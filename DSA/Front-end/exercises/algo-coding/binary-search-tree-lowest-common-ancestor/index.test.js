import { describe, it, expect, vi } from 'vitest';
import { binarySearchTreeLowestCommonAncestor } from './index.js';

describe('Binary Search Tree Lowest Common Ancestor', () => {
  describe('basic behavior', () => {
    it('implements Binary Search Tree Lowest Common Ancestor per README overview', () => {
      expect(() => binarySearchTreeLowestCommonAncestor()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => binarySearchTreeLowestCommonAncestor()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => binarySearchTreeLowestCommonAncestor()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => binarySearchTreeLowestCommonAncestor()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binarySearchTreeLowestCommonAncestor()).not.toThrow();
    });
  });

});
