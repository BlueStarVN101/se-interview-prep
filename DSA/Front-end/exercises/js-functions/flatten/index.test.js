import { describe, it, expect, vi } from 'vitest';
import { flatten } from './index.js';

describe('Flatten', () => {
  describe('basic behavior', () => {
    it('flattens nested arrays one level deep recursively', () => {
      expect(flatten([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('edge cases', () => {
    it('returns empty array for empty input', () => {
      expect(flatten([])).toEqual([]);
    });
    it('returns same flat array when already flat', () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

});
