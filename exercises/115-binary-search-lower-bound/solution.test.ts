import { describe, it, expect } from 'vitest';
import { lowerBound } from './solution';

describe('#115 - Binary Search: Lower Bound', () => {
  it('example 1', () => {
    // lowerBound([1,3,3,7],3)->1
    expect(lowerBound([1,3,3,7],3)).toEqual(1);
  });
  it('example 2', () => {
    // lowerBound([1,3,3,7],9)->4
    expect(lowerBound([1,3,3,7],9)).toEqual(4);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(lowerBound([], 3)).toEqual(0);
  });
  it('edge case: single element', () => {
    expect(lowerBound([1], 3)).toEqual(1);
  });
  it('edge case: all equal elements', () => {
    expect(lowerBound([1, 1, 1], 3)).toEqual(3);
  });
});
