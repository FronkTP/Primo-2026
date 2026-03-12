import { describe, it, expect } from 'vitest';
import { merge } from '../src/index';

describe('merge function', () => {
  it('should merge three arrays correctly', () => {
    const c1 = [1, 4, 7];
    const c2 = [2, 5, 8];
    const c3 = [9, 6, 3];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });

  it('should handle arrays of different lengths', () => {
    const c1 = [1, 10];
    const c2 = [2, 3, 4];
    const c3 = [15, 8, 5];
    const expected = [1, 2, 3, 4, 5, 8, 10, 15];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const c1: number[] = [];
    const c2 = [1, 2];
    const c3 = [5, 3];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 5]);
  });

  it('should handle duplicate values across arrays', () => {
    const c1 = [1, 5];
    const c2 = [1, 5];
    const c3 = [5, 1];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 1, 5, 5, 5]);
  });
});