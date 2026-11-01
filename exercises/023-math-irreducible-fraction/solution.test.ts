import { describe, it, expect } from 'vitest';
import { reduceFraction } from './solution';

describe('#023 - Math: Irreducible Fraction', () => {
  it('example 1', () => {
    // reduceFraction(8,12)->[2,3]
    expect(reduceFraction(8,12)).toEqual([2,3]);
  });
  it('example 2', () => {
    // reduceFraction(-6,9)->[-2,3]
    expect(reduceFraction(-6,9)).toEqual([-2,3]);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('minimum values (all 1s)', () => {
    expect(reduceFraction(1, 1)).toEqual([1, 1]);
  });
  it('already irreducible', () => {
    expect(reduceFraction(3, 7)).toEqual([3, 7]);
  });
  it('negative denominator', () => {
    expect(reduceFraction(6, -9)).toEqual([-2, 3]);
  });
  it('both negative', () => {
    expect(reduceFraction(-6, -9)).toEqual([2, 3]);
  });
  it('integer result', () => {
    expect(reduceFraction(10, 5)).toEqual([2, 1]);
  });
  it('zero numerator', () => {
    expect(reduceFraction(0, 5)).toEqual([0, 1]);
  });
  it('zero numerator with negative denominator (no -0)', () => {
    expect(reduceFraction(0, -5)).toEqual([0, 1]);
  });
  it('large numbers', () => {
    expect(reduceFraction(10 ** 15, 2 ** 40)).toEqual([30517578125, 33554432]);
  });
});
