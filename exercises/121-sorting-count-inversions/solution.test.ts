import { describe, it, expect } from 'vitest';
import { countInversions } from './solution';

describe('#121 - Sorting: Count Inversions', () => {
  it('example 1', () => {
    // countInversions([2,4,1,3,5])->3
    expect(countInversions([2,4,1,3,5])).toEqual(3);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(countInversions([])).toEqual(0);
  });
  it('edge case: single element', () => {
    expect(countInversions([2])).toEqual(0);
  });
  it('edge case: all equal elements', () => {
    expect(countInversions([2, 2, 2])).toEqual(0);
  });
});
