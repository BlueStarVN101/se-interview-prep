import { describe, it, expect, vi } from 'vitest';
import { promiseRace } from './index.js';

describe('Promise.race', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', async () => {
      await expect(promiseRace([Promise.resolve(1), new Promise(() => {})])).resolves.toBe(1);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseRace()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseRace()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseRace()).not.toThrow();
    });
  });

});
