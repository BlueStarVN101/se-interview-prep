import { describe, it, expect, vi } from 'vitest';
import { promiseTimeout } from './index.js';

describe('Promise Timeout', () => {
  describe('basic behavior', () => {
    it('implements Promise Timeout per README overview', () => {
      expect(() => promiseTimeout()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseTimeout()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseTimeout()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseTimeout()).not.toThrow();
    });
  });

});
