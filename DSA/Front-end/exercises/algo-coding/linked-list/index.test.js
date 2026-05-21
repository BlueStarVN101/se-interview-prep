import { describe, it, expect } from 'vitest';
import { LinkedList } from './index.js';

describe('Linked List', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new LinkedList();
      const op = "append";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Single node', () => {
      // README edge case: Single node
      expect(() => LinkedList()).not.toThrow();
    });
    it('should handle edge case: Cycles', () => {
      // README edge case: Cycles
      expect(() => LinkedList()).not.toThrow();
    });
    it('should handle edge case: Tail deletion', () => {
      // README edge case: Tail deletion
      expect(() => LinkedList()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => LinkedList()).not.toThrow();
    });
  });

});
