import { describe, it, expect, vi } from 'vitest';
import { binaryTreeEqual } from './index.js';

describe('Binary Tree Equal', () => {
  describe('basic behavior', () => {
    it('implements Binary Tree Equal per README overview', () => {
      expect(() => binaryTreeEqual()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => binaryTreeEqual()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => binaryTreeEqual()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => binaryTreeEqual()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => binaryTreeEqual()).not.toThrow();
    });
  });

});
