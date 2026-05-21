import { describe, it, expect } from 'vitest';
import { Stack } from './index.js';

describe('Stack', () => {
  describe('basic behavior', () => {
    it('push and pop follow last-in-first-out order', () => {
      const s = new Stack();
      s.push(1);
      s.push(2);
      expect(s.pop()).toBe(2);
      expect(s.pop()).toBe(1);
    });
  });

  describe('edge cases', () => {
    it('isEmpty returns true for new stack', () => {
      const s = new Stack();
      expect(s.isEmpty()).toBe(true);
    });
  });

});
