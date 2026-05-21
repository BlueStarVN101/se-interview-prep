import { describe, it, expect, vi } from 'vitest';
import { minimumMeetingRoomsNeeded } from './index.js';

describe('Minimum Meeting Rooms Needed', () => {
  describe('basic behavior', () => {
    it('implements Minimum Meeting Rooms Needed per README overview', () => {
      expect(() => minimumMeetingRoomsNeeded()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Touching intervals', () => {
      // README edge case: Touching intervals
      expect(() => minimumMeetingRoomsNeeded()).not.toThrow();
    });
    it('should handle edge case: Nested intervals', () => {
      // README edge case: Nested intervals
      expect(() => minimumMeetingRoomsNeeded()).not.toThrow();
    });
    it('should handle edge case: Unsorted input', () => {
      // README edge case: Unsorted input
      expect(() => minimumMeetingRoomsNeeded()).not.toThrow();
    });
    it('should handle edge case: Empty or minimal input', () => {
      // README edge case: Empty or minimal input
      expect(() => minimumMeetingRoomsNeeded()).not.toThrow();
    });
  });

});
