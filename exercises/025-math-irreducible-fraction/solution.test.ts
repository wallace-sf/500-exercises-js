import { describe, it, expect } from 'vitest';
import { reduceFraction } from './solution';

describe('#025 - Math: Irreducible Fraction', () => {
  it('example 1', () => {
    // reduceFraction(8,12)->[2,3]
    expect(reduceFraction(8,12)).toEqual([2,3]);
  });
  it('example 2', () => {
    // reduceFraction(-6,9)->[-2,3]
    expect(reduceFraction(-6,9)).toEqual([-2,3]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: minimum values (all 1s)', () => {
    expect(reduceFraction(1, 1)).toEqual([1, 1]);
  });
});
