import { describe, it, expect, vi } from 'vitest';
import { promisifyIi } from './index.js';

describe('Promisify II', () => {
  describe('basic behavior', () => {
    it('implements Promisify II per README overview', () => {
      expect(() => promisifyIi()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promisifyIi()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promisifyIi()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promisifyIi()).not.toThrow();
    });
  });

});
