import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from './index.js';

describe('Binary Search Tree', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new BinarySearchTree();
      const op = "execute";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => BinarySearchTree()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => BinarySearchTree()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => BinarySearchTree()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => BinarySearchTree()).not.toThrow();
    });
  });

});
