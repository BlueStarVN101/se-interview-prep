import { describe, it, expect, vi } from 'vitest';
import { arrayProductExcludingCurrent } from './index.js';

describe('Array Product Excluding Current', () => {
  describe('basic behavior', () => {
    it('returns product of all elements except self at each index', () => {
      expect(arrayProductExcludingCurrent([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });
  });

  describe('edge cases', () => {
    it('handles a single element', () => {
      expect(arrayProductExcludingCurrent([5])).toEqual([1]);
    });
    it('handles zeros without breaking product logic', () => {
      expect(arrayProductExcludingCurrent([0, 2, 3])).toEqual([6, 0, 0]);
    });
  });

});
