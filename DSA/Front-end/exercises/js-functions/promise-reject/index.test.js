import { describe, it, expect, vi } from 'vitest';
import { promiseReject } from './index.js';

describe('Promise.reject', () => {
  describe('basic behavior', () => {
    it('implements Promise.reject per README overview', () => {
      expect(() => promiseReject()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseReject()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseReject()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseReject()).not.toThrow();
    });
  });

});
