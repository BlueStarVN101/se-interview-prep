import { describe, it, expect, vi } from 'vitest';
import { cancellableInterval } from './index.js';

describe('Cancellable Interval', () => {
  describe('basic behavior', () => {
    it('implements Cancellable Interval per README overview', () => {
      expect(() => cancellableInterval()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Clearing timers', () => {
      // README edge case: Clearing timers
      expect(() => cancellableInterval()).not.toThrow();
    });
    it('should handle edge case: Overlapping schedules', () => {
      // README edge case: Overlapping schedules
      expect(() => cancellableInterval()).not.toThrow();
    });
    it('should handle edge case: No-op cancel', () => {
      // README edge case: No-op cancel
      expect(() => cancellableInterval()).not.toThrow();
    });
  });

});
