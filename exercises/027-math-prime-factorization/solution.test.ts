import { describe, it, expect } from 'vitest';
import { factorize } from './solution';

describe('#027 - Math: Prime Factorization', () => {
  it('example 1', () => {
    // factorize(360)->[[2, 3], [3, 2], [5, 1]]
    expect(factorize(360)).toEqual([[2, 3], [3, 2], [5, 1]]);
  });
  it('example 2', () => {
    // factorize(13)->[[13, 1]]
    expect(factorize(13)).toEqual([[13, 1]]);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('smallest input', () => {
    expect(factorize(2)).toEqual([[2, 1]]);
  });
  it('power of two', () => {
    expect(factorize(1024)).toEqual([[2, 10]]);
  });
  it('product of the first 10 primes', () => {
    expect(factorize(6469693230)).toEqual([
      [2, 1], [3, 1], [5, 1], [7, 1], [11, 1], [13, 1], [17, 1], [19, 1], [23, 1], [29, 1],
    ]);
  });
  it('upper bound n = 10^12', () => {
    expect(factorize(10 ** 12)).toEqual([[2, 12], [5, 12]]);
  });
  it('square of a large prime', () => {
    expect(factorize(999966000289)).toEqual([[999983, 2]]);
  });
  it('large prime', () => {
    expect(factorize(999999999989)).toEqual([[999999999989, 1]]);
  });
  it('several large-ish factors', () => {
    expect(factorize(600851475143)).toEqual([[71, 1], [839, 1], [1471, 1], [6857, 1]]);
  });
});
