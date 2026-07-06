import { describe, it, expect } from 'vitest';
import { maxArea } from './solution';

describe('#050 - Two Pointers: Container With Most Water', () => {
  it('example 1', () => {
    // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])->49
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(maxArea([])).toEqual(0);
  });
  it('edge case: single element', () => {
    expect(maxArea([1])).toEqual(0);
  });
  it('edge case: all equal elements', () => {
    expect(maxArea([1, 1, 1])).toEqual(2);
  });
});
