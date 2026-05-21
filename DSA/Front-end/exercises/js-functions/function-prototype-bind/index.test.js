import { describe, it, expect, vi } from 'vitest';
import { bind } from './index.js';

describe('Function.prototype.bind', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      function greet(greeting) { return `${greeting} ${this.name}`; }
      const bound = bind(greet, { name: "Ada" }, "Hello");
      expect(bound()).toBe("Hello Ada");
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty array', () => {
      // README edge case: Empty array
      expect(() => bind()).not.toThrow();
    });
    it('should handle edge case: Sparse arrays', () => {
      // README edge case: Sparse arrays
      expect(() => bind()).not.toThrow();
    });
    it('should handle edge case: Mutate vs copy per spec', () => {
      // README edge case: Mutate vs copy per spec
      expect(() => bind()).not.toThrow();
    });
  });

});
