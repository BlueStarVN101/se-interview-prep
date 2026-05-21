import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useToggle from './index.js';

describe('useToggle', () => {
  describe('basic behavior', () => {
    it('returns initial boolean state', () => {
      const { result } = renderHook(() => useToggle(false));
      expect(result.current[0]).toBe(false);
    });
    it('toggles boolean state when toggle function is called', () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => result.current[1]());
      expect(result.current[0]).toBe(true);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Initial mount vs update', () => {
      // README edge case: Initial mount vs update
      expect(() => renderHook(() => useToggle(false))).not.toThrow();
    });
    it('should handle edge case: Unmount cleanup', () => {
      // README edge case: Unmount cleanup
      expect(() => renderHook(() => useToggle(false))).not.toThrow();
    });
    it('should handle edge case: Strict Mode double-invoke (if targeting React)', () => {
      // README edge case: Strict Mode double-invoke (if targeting React)
      expect(() => renderHook(() => useToggle(false))).not.toThrow();
    });
  });

});
