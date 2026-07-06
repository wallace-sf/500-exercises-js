import { describe, it, expect } from 'vitest';
import { nextGreater } from './solution';

describe('#173 - Monotonic Stack: Next Greater Element', () => {
  it('example 1', () => {
    // nextGreater([2,1,2,4,3])->[4,2,4,-1,-1]
    expect(nextGreater([2,1,2,4,3])).toEqual([4,2,4,-1,-1]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(nextGreater([])).toEqual([]);
  });
  it('edge case: single element', () => {
    expect(nextGreater([2])).toEqual([-1]);
  });
  it('edge case: all equal elements', () => {
    expect(nextGreater([2, 2, 2])).toEqual([-1, -1, -1]);
  });
});
