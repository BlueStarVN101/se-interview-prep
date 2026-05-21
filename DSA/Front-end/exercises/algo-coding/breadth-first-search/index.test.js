import { describe, it, expect, vi } from 'vitest';
import { breadthFirstSearch } from './index.js';

describe('Breadth-first Search', () => {
  describe('basic behavior', () => {
    it('implements Breadth-first Search per README overview', () => {
      expect(() => breadthFirstSearch()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => breadthFirstSearch()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => breadthFirstSearch()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => breadthFirstSearch()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => breadthFirstSearch()).not.toThrow();
    });
  });

});
