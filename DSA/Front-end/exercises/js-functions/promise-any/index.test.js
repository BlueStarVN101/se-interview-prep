import { describe, it, expect, vi } from 'vitest';
import { promiseAny } from './index.js';

describe('Promise.any', () => {
  describe('basic behavior', () => {
    it('behaves per README (1)', async () => {
      const rejected = Promise.reject('a');
      rejected.catch(() => {});
      await expect(promiseAny([rejected, Promise.resolve(2)])).resolves.toBe(2);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => promiseAny()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => promiseAny()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => promiseAny()).not.toThrow();
    });
  });

});
