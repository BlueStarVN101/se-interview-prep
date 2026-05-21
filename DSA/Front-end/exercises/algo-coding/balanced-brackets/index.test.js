import { describe, it, expect, vi } from 'vitest';
import { balancedBrackets } from './index.js';

describe('Balanced Brackets', () => {
  describe('basic behavior', () => {
    it('returns true for properly nested brackets', () => {
      expect(balancedBrackets("({[]})")).toBe(true);
    });
    it('returns false for improperly nested brackets', () => {
      expect(balancedBrackets("([)]")).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('returns true for empty string', () => {
      expect(balancedBrackets("")).toBe(true);
    });
    it('returns false when only open brackets remain', () => {
      expect(balancedBrackets("(((")).toBe(false);
    });
  });

});
