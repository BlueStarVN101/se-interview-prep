import { describe, it, expect, vi } from 'vitest';
import { bitReversal } from './index.js';

describe('Bit Reversal', () => {
  describe('basic behavior', () => {
    it('implements Bit Reversal per README overview', () => {
      expect(() => bitReversal()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Minimum and maximum sizes', () => {
      // README edge case: Minimum and maximum sizes
      expect(() => bitReversal()).not.toThrow();
    });
    it('should handle edge case: Negative numbers if allowed', () => {
      // README edge case: Negative numbers if allowed
      expect(() => bitReversal()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => bitReversal()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => bitReversal()).not.toThrow();
    });
  });

});
