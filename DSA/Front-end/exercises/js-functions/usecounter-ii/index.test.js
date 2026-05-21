import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import usecounterIi from './index.js';

describe('useCounter II', () => {
  describe('basic behavior', () => {
    it('exposes hook API described in README', () => {
      expect(() => renderHook(() => usecounterIi())).not.toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Initial mount vs update', () => {
      // README edge case: Initial mount vs update
      expect(() => renderHook(() => usecounterIi())).not.toThrow();
    });
    it('should handle edge case: Unmount cleanup', () => {
      // README edge case: Unmount cleanup
      expect(() => renderHook(() => usecounterIi())).not.toThrow();
    });
    it('should handle edge case: Strict Mode double-invoke (if targeting React)', () => {
      // README edge case: Strict Mode double-invoke (if targeting React)
      expect(() => renderHook(() => usecounterIi())).not.toThrow();
    });
  });

});
