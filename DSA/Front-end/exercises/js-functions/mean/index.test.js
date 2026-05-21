import { describe, it, expect, vi } from 'vitest';
import { mean } from './index.js';

describe('Mean', () => {
  describe('basic behavior', () => {
    it('returns the average of positive integers', () => {
      expect(mean([1, 2, 3, 4])).toBe(2.5);
    });
    it('returns the average of two values', () => {
      expect(mean([10, 20])).toBe(15);
    });
  });

  describe('edge cases', () => {
    it('returns the single element for a one-item array', () => {
      expect(mean([5])).toBe(5);
    });
    it('handles negative numbers and decimals', () => {
      expect(mean([-2, 2])).toBe(0);
      expect(mean([0.5, 1.5])).toBe(1);
    });
    it('returns 0 for an empty array', () => {
      expect(mean([])).toBe(0);
    });
    it('does not mutate the input array', () => {
      const input = [1, 2, 3];
      mean(input);
      expect(input).toEqual([1, 2, 3]);
    });
  });

});
