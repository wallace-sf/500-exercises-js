import { describe, it, expect } from 'vitest';
import { power } from './solution';

describe('#017 - Recursion: Fast Power', () => {
  it('example 1', () => {
    // power(2, 10)->1024
    expect(power(2, 10)).toEqual(1024);
  });
  it('example 2', () => {
    // power(2, -2)->0.25
    expect(power(2, -2)).toEqual(0.25);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('n = 0', () => {
    expect(power(5, 0)).toEqual(1);
    expect(power(0, 0)).toEqual(1);
  });
  it('n = 1', () => {
    expect(power(7, 1)).toEqual(7);
  });
  it('x = 0', () => {
    expect(power(0, 5)).toEqual(0);
  });
  it('negative base, odd exponent', () => {
    expect(power(-2, 3)).toEqual(-8);
  });
  it('negative base, even exponent', () => {
    expect(power(-2, 4)).toEqual(16);
  });
  it('negative exponent', () => {
    expect(power(4, -1)).toEqual(0.25);
    expect(power(-2, -3)).toEqual(-0.125);
  });
  it('non-integer base', () => {
    expect(power(1.5, 20)).toBeCloseTo(3325.256730079651, 6);
  });
  it('huge exponent with base 1 and -1', () => {
    expect(power(1, 1000000000)).toEqual(1);
    expect(power(-1, 999999999)).toEqual(-1);
  });
  it('huge exponent that underflows to 0', () => {
    expect(power(0.5, 1000000000)).toEqual(0);
    expect(power(2, -1000000000)).toEqual(0);
  });
  it('must be fast for huge exponents', () => {
    const start = performance.now();
    for (let i = 0; i < 100; i++) power(-1, 1000000000 - i);
    expect(performance.now() - start).toBeLessThan(500);
  });
});
