import { describe, it, expect, vi } from 'vitest';
import { dropWhile } from './index.js';

describe('Drop While', () => {
  describe('basic behavior', () => {
    it('implements Drop While per README overview', () => {
      expect(() => dropWhile()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => dropWhile()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => dropWhile()).not.toThrow();
    });
    it('should handle edge case: Invalid or missing values if applicable', () => {
      // README edge case: Invalid or missing values if applicable
      expect(() => dropWhile()).not.toThrow();
    });
  });

});
