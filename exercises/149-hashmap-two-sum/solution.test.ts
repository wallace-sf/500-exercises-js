import { describe, it, expect } from 'vitest';
import { twoSum } from './solution';

describe('#149 - HashMap: Two Sum', () => {
  it('example 1', () => {
    // twoSum([2,7,11,15],9)->[0,1]
    expect(twoSum([2,7,11,15],9)).toEqual([0,1]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(twoSum([], 9)).toEqual([-1, -1]);
  });
  it('edge case: single element', () => {
    expect(twoSum([2], 9)).toEqual([-1, -1]);
  });
  it('edge case: all equal elements', () => {
    expect(twoSum([2, 2, 2], 9)).toEqual([-1, -1]);
  });
});
