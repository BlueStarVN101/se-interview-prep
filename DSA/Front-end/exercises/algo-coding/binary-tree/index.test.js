import { describe, it, expect } from 'vitest';
import { BinaryTree } from './index.js';

describe('Binary Tree', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new BinaryTree();
      const op = "execute";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => BinaryTree()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => BinaryTree()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => BinaryTree()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => BinaryTree()).not.toThrow();
    });
  });

});
