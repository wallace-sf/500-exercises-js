import { describe, it, expect } from 'vitest';
import { subarraySum } from './solution';

describe('#096 - Prefix Sum: Subarrays With Sum == K', () => {
  it('example 1', () => {
    // subarraySum([1,1,1],2)->2
    expect(subarraySum([1,1,1],2)).toEqual(2);
  });
  it('example 2', () => {
    // subarraySum([1,2,3],3)->2
    expect(subarraySum([1,2,3],3)).toEqual(2);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(subarraySum([], 2)).toEqual(0);
  });
  it('edge case: single element', () => {
    expect(subarraySum([1], 2)).toEqual(0);
  });
});
