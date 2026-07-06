import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   twoSumSorted([2, 3, 5, 6, 12, 13, 14, 15],13)->(indices)

describe('#042 - Two Pointers: Two Sum (Sorted)', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSumSorted([], 13)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSumSorted([2], 13)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSumSorted([2, 2, 2], 13)).toEqual([-1, -1]);
  });
});
