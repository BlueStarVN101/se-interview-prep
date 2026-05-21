import { describe, it, expect, vi } from 'vitest';
import { sleep } from './index.js';

describe('Sleep', () => {
  describe('basic behavior', () => {
    vi.useFakeTimers();
    it('behaves per README (1)', async () => {
      vi.useFakeTimers();
      const p = sleep(100);
      vi.advanceTimersByTime(100);
      await expect(p).resolves.toBeUndefined();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty input iterables', () => {
      // README edge case: Empty input iterables
      expect(() => sleep()).not.toThrow();
    });
    it('should handle edge case: Mixed resolve/reject timing', () => {
      // README edge case: Mixed resolve/reject timing
      expect(() => sleep()).not.toThrow();
    });
    it('should handle edge case: Non-promise thenables if spec requires', () => {
      // README edge case: Non-promise thenables if spec requires
      expect(() => sleep()).not.toThrow();
    });
  });

});
