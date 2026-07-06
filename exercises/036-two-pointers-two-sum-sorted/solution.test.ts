import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   twoSumSorted([-2, 1, 2, 5, 5, 8, 9, 9],5)->(indices)

describe('#036 - Two Pointers: Two Sum (Sorted)', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSumSorted([], 5)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSumSorted([-2], 5)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSumSorted([-2, -2, -2], 5)).toEqual([-1, -1]);
  });
});
