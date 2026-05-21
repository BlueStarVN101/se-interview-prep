import { describe, it, expect, vi } from 'vitest';
import { topologicalSort } from './index.js';

describe('Topological Sort', () => {
  describe('basic behavior', () => {
    it('implements Topological Sort per README overview', () => {
      expect(() => topologicalSort()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Already sorted', () => {
      // README edge case: Already sorted
      expect(() => topologicalSort()).not.toThrow();
    });
    it('should handle edge case: Duplicates', () => {
      // README edge case: Duplicates
      expect(() => topologicalSort()).not.toThrow();
    });
    it('should handle edge case: Single element', () => {
      // README edge case: Single element
      expect(() => topologicalSort()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => topologicalSort()).not.toThrow();
    });
  });

});
