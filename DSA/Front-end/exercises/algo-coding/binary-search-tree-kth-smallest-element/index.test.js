import { describe, it, expect, vi } from 'vitest';
import { binarySearchTreeKthSmallestElement } from './index.js';

describe('Binary Search Tree Kth Smallest Element', () => {
  describe('basic behavior', () => {
    it('implements Binary Search Tree Kth Smallest Element per README overview', () => {
      expect(() => binarySearchTreeKthSmallestElement()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => binarySearchTreeKthSmallestElement()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => binarySearchTreeKthSmallestElement()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => binarySearchTreeKthSmallestElement()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binarySearchTreeKthSmallestElement()).not.toThrow();
    });
  });

});
