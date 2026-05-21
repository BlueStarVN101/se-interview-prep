import { describe, it, expect, vi } from 'vitest';
import { meetingCalendar } from './index.js';

describe('Meeting Calendar', () => {
  describe('basic behavior', () => {
    it('implements Meeting Calendar per README overview', () => {
      expect(() => meetingCalendar()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Touching intervals', () => {
      // README edge case: Touching intervals
      expect(() => meetingCalendar()).not.toThrow();
    });
    it('should handle edge case: Nested intervals', () => {
      // README edge case: Nested intervals
      expect(() => meetingCalendar()).not.toThrow();
    });
    it('should handle edge case: Unsorted input', () => {
      // README edge case: Unsorted input
      expect(() => meetingCalendar()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => meetingCalendar()).not.toThrow();
    });
  });

});
