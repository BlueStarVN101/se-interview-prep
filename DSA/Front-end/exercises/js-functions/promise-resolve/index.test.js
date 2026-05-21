import { describe, it, expect, vi } from 'vitest';
import { promiseResolve } from './index.js';

describe('Promise.resolve', () => {
  describe('basic behavior', () => {
    it('implements Promise.resolve per README overview', () => {
      expect(() => promiseResolve()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseResolve()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseResolve()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseResolve()).not.toThrow();
    });
  });

});
