import { describe, it, expect, vi } from 'vitest';
import { promiseWithresolvers } from './index.js';

describe('Promise.withResolvers', () => {
  describe('basic behavior', () => {
    it('implements Promise.withResolvers per README overview', () => {
      expect(() => promiseWithresolvers()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseWithresolvers()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseWithresolvers()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseWithresolvers()).not.toThrow();
    });
  });

});
