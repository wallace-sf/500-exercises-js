import { describe, it, expect } from 'vitest';
import { isqrt } from './solution';

describe('#028 - Math: Integer Square Root', () => {
  it('example 1', () => {
    // isqrt(16)->4
    expect(isqrt(16)).toEqual(4);
  });
  it('example 2', () => {
    // isqrt(15)->3
    expect(isqrt(15)).toEqual(3);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('n = 0', () => {
    expect(isqrt(0)).toEqual(0);
  });
  it('n = 1', () => {
    expect(isqrt(1)).toEqual(1);
  });
  it('small non-squares', () => {
    expect(isqrt(2)).toEqual(1);
    expect(isqrt(3)).toEqual(1);
  });
  it('just below and at a perfect square', () => {
    expect(isqrt(99)).toEqual(9);
    expect(isqrt(100)).toEqual(10);
  });
  it('large perfect square and its predecessor', () => {
    expect(isqrt(999999961946176)).toEqual(31622776);
    expect(isqrt(999999961946175)).toEqual(31622775);
  });
  it('upper bound n = 10^15', () => {
    expect(isqrt(10 ** 15)).toEqual(31622776);
  });
});
