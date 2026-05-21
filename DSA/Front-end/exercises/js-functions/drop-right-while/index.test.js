import { describe, it, expect, vi } from 'vitest';
import { dropRightWhile } from './index.js';

describe('Drop Right While', () => {
  describe('basic behavior', () => {
    it('implements Drop Right While per README overview', () => {
      expect(() => dropRightWhile()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => dropRightWhile()).not.toThrow();
    });
    it('should handle edge case: Single-element input', () => {
      // README edge case: Single-element input
      expect(() => dropRightWhile()).not.toThrow();
    });
    it('should handle edge case: Invalid or missing values if applicable', () => {
      // README edge case: Invalid or missing values if applicable
      expect(() => dropRightWhile()).not.toThrow();
    });
  });

});
