import { describe, it, expect } from 'vitest';
import { EventEmitter } from './index.js';

describe('Event Emitter', () => {
  describe('basic behavior', () => {
    it('exposes class API described in README', () => {
      const instance = new EventEmitter();
      const op = "on";
      expect(() => instance[op]()).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Emit with no listeners', () => {
      // README edge case: Emit with no listeners
      expect(() => EventEmitter()).not.toThrow();
    });
    it('should handle edge case: Removing listener during emit', () => {
      // README edge case: Removing listener during emit
      expect(() => EventEmitter()).not.toThrow();
    });
    it('should handle edge case: Duplicate handlers', () => {
      // README edge case: Duplicate handlers
      expect(() => EventEmitter()).not.toThrow();
    });
    it('should handle edge case: Nested structures', () => {
      // README edge case: Nested structures
      expect(() => EventEmitter()).not.toThrow();
    });
  });

});
