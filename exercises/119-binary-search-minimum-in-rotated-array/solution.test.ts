import { describe, it, expect } from 'vitest';
import { findMinRotated } from './solution';

describe('#119 - Binary Search: Minimum in Rotated Array', () => {
  it('example 1', () => {
    // findMinRotated([4,5,6,7,0,1,2])->0
    expect(findMinRotated([4,5,6,7,0,1,2])).toEqual(0);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: single element', () => {
    expect(findMinRotated([4])).toEqual(4);
  });
  it('edge case: all equal elements', () => {
    expect(findMinRotated([4, 4, 4])).toEqual(4);
  });
});
