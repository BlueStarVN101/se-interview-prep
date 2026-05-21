import { describe, it, expect, vi } from 'vitest';
import { promiseAll } from './index.js';

describe('Promise.all', () => {
  describe('basic behavior', () => {
    it('resolves with ordered results when all promises fulfill', async () => {
      await expect(promiseAll([Promise.resolve(1), Promise.resolve(2)])).resolves.toEqual([1, 2]);
    });
  });

  describe('error handling', () => {
    it('rejects when any input rejects', async () => {
      const rejected = Promise.reject('err');
      rejected.catch(() => {});
      await expect(promiseAll([Promise.resolve(1), rejected])).rejects.toBe('err');
    });
  });

  describe('edge cases', () => {
    it('resolves to empty array for empty iterable', async () => {
      await expect(promiseAll([])).resolves.toEqual([]);
    });
  });

});
