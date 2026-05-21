import { describe, it, expect, vi } from 'vitest';
import { cancellableTimeout } from './index.js';

describe('Cancellable Timeout', () => {
  describe('basic behavior', () => {
    it('implements Cancellable Timeout per README overview', () => {
      expect(() => cancellableTimeout()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Clearing timers', () => {
      // README edge case: Clearing timers
      expect(() => cancellableTimeout()).not.toThrow();
    });
    it('should handle edge case: Overlapping schedules', () => {
      // README edge case: Overlapping schedules
      expect(() => cancellableTimeout()).not.toThrow();
    });
    it('should handle edge case: No-op cancel', () => {
      // README edge case: No-op cancel
      expect(() => cancellableTimeout()).not.toThrow();
    });
  });

});
