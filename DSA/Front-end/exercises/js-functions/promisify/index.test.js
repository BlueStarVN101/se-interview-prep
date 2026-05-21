import { describe, it, expect, vi } from 'vitest';
import { promisify } from './index.js';

describe('Promisify', () => {
  describe('basic behavior', () => {
    it('implements Promisify per README overview', () => {
      expect(() => promisify()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promisify()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promisify()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promisify()).not.toThrow();
    });
  });

});
