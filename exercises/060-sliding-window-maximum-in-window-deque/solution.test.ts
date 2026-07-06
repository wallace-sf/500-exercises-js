import { describe, it, expect } from 'vitest';
import { maxSlidingWindow } from './solution';

describe('#060 - Sliding Window: Maximum in Window (Deque)', () => {
  it('example 1', () => {
    // maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)->[3,3,5,5,6,7]
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)).toEqual([3,3,5,5,6,7]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(maxSlidingWindow([], 3)).toEqual([]);
  });
  it('edge case: single element', () => {
    expect(maxSlidingWindow([1], 3)).toEqual([]);
  });
  it('edge case: all equal elements', () => {
    expect(maxSlidingWindow([1, 1, 1], 3)).toEqual([1]);
  });
});
