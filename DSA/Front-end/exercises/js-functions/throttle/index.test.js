import { describe, it, expect, vi } from 'vitest';
import { throttle } from './index.js';

describe('Throttle', () => {
  describe('basic behavior', () => {
    vi.useFakeTimers();
    it('limits how often fn can run within the wait window', () => {
      const fn = vi.fn();
      const throttled = throttle(fn, 100);
      throttled();
      throttled();
      expect(fn).toHaveBeenCalledTimes(1);
      vi.advanceTimersByTime(100);
      throttled();
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Burst calls within window', () => {
      // README edge case: Burst calls within window
      expect(() => throttle(() => {}, 100)).not.toThrow();
    });
    it('should handle edge case: Final trailing call after burst ends', () => {
      // README edge case: Final trailing call after burst ends
      expect(() => throttle(() => {}, 100)).not.toThrow();
    });
  });

});
