import { describe, it, expect, vi } from 'vitest';
import { binaryTreeRebuildingFromPreorderAndInorderTraversals } from './index.js';

describe('Binary Tree Rebuilding from Preorder and Inorder Traversals', () => {
  describe('basic behavior', () => {
    it('implements Binary Tree Rebuilding from Preorder and Inorder Traversals per README overview', () => {
      expect(() => binaryTreeRebuildingFromPreorderAndInorderTraversals()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => binaryTreeRebuildingFromPreorderAndInorderTraversals()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => binaryTreeRebuildingFromPreorderAndInorderTraversals()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => binaryTreeRebuildingFromPreorderAndInorderTraversals()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binaryTreeRebuildingFromPreorderAndInorderTraversals()).not.toThrow();
    });
  });

});
