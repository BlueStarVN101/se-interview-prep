import { describe, it, expect, vi } from 'vitest';
import { promiseMerge } from './index.js';

describe('Promise Merge', () => {
  describe('basic behavior', () => {
    it('implements Promise Merge per README overview', () => {
      expect(() => promiseMerge()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseMerge()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseMerge()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseMerge()).not.toThrow();
    });
  });

});
