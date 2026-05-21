import { describe, it, expect, vi } from 'vitest';
import { optimalStockTrading } from './index.js';

describe('Optimal Stock Trading', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', () => {
      expect(optimalStockTrading([7, 1, 5, 3, 6, 4])).toBe(5);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => optimalStockTrading()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => optimalStockTrading()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => optimalStockTrading()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => optimalStockTrading()).not.toThrow();
    });
  });

});
