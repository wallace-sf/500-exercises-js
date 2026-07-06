import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   twoSumSorted([6, 8, 9, 12, 12, 12, 14, 15],7)->(indices)

describe('#039 - Two Pointers: Two Sum (Sorted)', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSumSorted([], 7)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSumSorted([6], 7)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSumSorted([6, 6, 6], 7)).toEqual([-1, -1]);
  });
});
