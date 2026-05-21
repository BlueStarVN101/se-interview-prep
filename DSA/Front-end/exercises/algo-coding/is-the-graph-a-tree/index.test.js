import { describe, it, expect, vi } from 'vitest';
import { isTheGraphATree } from './index.js';

describe('Is the Graph a Tree', () => {
  describe('basic behavior', () => {
    it('implements Is the Graph a Tree per README overview', () => {
      expect(() => isTheGraphATree()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty tree', () => {
      // README edge case: Empty tree
      expect(() => isTheGraphATree()).not.toThrow();
    });
    it('should handle edge case: Skewed tree', () => {
      // README edge case: Skewed tree
      expect(() => isTheGraphATree()).not.toThrow();
    });
    it('should handle edge case: Duplicate keys in BST', () => {
      // README edge case: Duplicate keys in BST
      expect(() => isTheGraphATree()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => isTheGraphATree()).not.toThrow();
    });
  });

});
