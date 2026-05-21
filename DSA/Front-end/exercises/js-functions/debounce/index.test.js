import { describe, it, expect, vi } from 'vitest';
import { debounce } from './index.js';

describe('Debounce', () => {
  describe('basic behavior', () => {
    vi.useFakeTimers();
    it('invokes fn only once after wait when called repeatedly', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 100);
      debounced('a');
      debounced('b');
      debounced('c');
      expect(fn).not.toHaveBeenCalled();
      vi.advanceTimersByTime(99);
      expect(fn).not.toHaveBeenCalled();
      vi.advanceTimersByTime(1);
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith('c');
    });
    vi.useFakeTimers();
    it('resets the timer on each call', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 50);
      debounced();
      vi.advanceTimersByTime(40);
      debounced();
      vi.advanceTimersByTime(40);
      expect(fn).not.toHaveBeenCalled();
      vi.advanceTimersByTime(10);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('edge cases', () => {
    vi.useFakeTimers();
    it('passes multiple arguments from the last invocation', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 20);
      debounced(1, 2);
      debounced(3, 4, 5);
      vi.advanceTimersByTime(20);
      expect(fn).toHaveBeenCalledWith(3, 4, 5);
    });
    vi.useFakeTimers();
    it('preserves this context', () => {
      const obj = { value: 0, increment: vi.fn(function () { this.value += 1; }) };
      obj.increment = debounce(obj.increment, 30);
      obj.increment();
      obj.increment();
      vi.advanceTimersByTime(30);
      expect(obj.increment).toHaveBeenCalledTimes(1);
      expect(obj.value).toBe(1);
    });
  });

});
