import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   twoSumSorted([-3, 3, 5, 6, 6, 7, 9, 10],9)->(indices)

describe('#033 - Two Pointers: Two Sum (Sorted)', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSumSorted([], 9)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSumSorted([-3], 9)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSumSorted([-3, -3, -3], 9)).toEqual([-1, -1]);
  });
});
