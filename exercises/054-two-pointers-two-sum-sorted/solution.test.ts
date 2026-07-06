import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   twoSumSorted([4, 4, 7, 7, 8, 8, 10, 12],2)->(indices)

describe('#054 - Two Pointers: Two Sum (Sorted)', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSumSorted([], 2)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSumSorted([4], 2)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSumSorted([4, 4, 4], 2)).toEqual([-1, -1]);
  });
});
