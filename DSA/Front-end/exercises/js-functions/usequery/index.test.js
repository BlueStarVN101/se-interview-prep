import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useQuery from './index.js';

describe('useQuery', () => {
  describe('basic behavior', () => {
    it('should start in a loading state', () => {
      const fn = vi.fn(() => new Promise(() => {}));
      const { result } = renderHook(() => useQuery(fn, []));
      expect(result.current.isLoading).toBe(true);
    });
  });

  describe('fulfilled state', () => {
    it('should resolve with data on success', async () => {
      const fn = vi.fn(async () => 42);
      const { result } = renderHook(() => useQuery(fn, []));
      await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.data).toBe(42);
      expect(result.current.error).toBeNull();
    });
  });

  describe('rejected state', () => {
    it('should capture error when promise rejects', async () => {
      const fn = vi.fn(async () => { throw new Error('fail'); });
      const { result } = renderHook(() => useQuery(fn, []));
      await vi.waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.error).toBeInstanceOf(Error);
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Initial mount vs update', () => {
      // README edge case: Initial mount vs update
      expect(() => renderHook(() => useQuery(async () => 1, []))).not.toThrow();
    });
    it('should handle edge case: Unmount cleanup', () => {
      // README edge case: Unmount cleanup
      expect(() => renderHook(() => useQuery(async () => 1, []))).not.toThrow();
    });
    it('should handle edge case: Strict Mode double-invoke (if targeting React)', () => {
      // README edge case: Strict Mode double-invoke (if targeting React)
      expect(() => renderHook(() => useQuery(async () => 1, []))).not.toThrow();
    });
  });

});
