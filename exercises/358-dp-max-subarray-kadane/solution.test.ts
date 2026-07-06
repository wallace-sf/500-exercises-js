import { describe, it, expect } from 'vitest';
import { maxSubArray } from './solution';

describe('#358 - DP: Max Subarray (Kadane)', () => {
  it('example 1', () => {
    // maxSubArray([-2,1,-3,4,-1,2,1,-5,4])->6
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: single element', () => {
    expect(maxSubArray([-2])).toEqual(-2);
  });
  it('edge case: all equal elements', () => {
    expect(maxSubArray([-2, -2, -2])).toEqual(-2);
  });
});
