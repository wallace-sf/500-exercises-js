import { describe, it, expect } from 'vitest';
import { primesUpTo } from './solution';

describe('#026 - Math: Sieve of Eratosthenes', () => {
  it('example 1', () => {
    // primesUpTo(10)->[2, 3, 5, 7]
    expect(primesUpTo(10)).toEqual([2, 3, 5, 7]);
  });
  it('example 2', () => {
    // primesUpTo(1)->[]
    expect(primesUpTo(1)).toEqual([]);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('n = 0', () => {
    expect(primesUpTo(0)).toEqual([]);
  });
  it('n = 2', () => {
    expect(primesUpTo(2)).toEqual([2]);
  });
  it('n = 3', () => {
    expect(primesUpTo(3)).toEqual([2, 3]);
  });
  it('n is a perfect square', () => {
    expect(primesUpTo(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });
  it('n = 30', () => {
    expect(primesUpTo(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
  it('upper bound n = 10^6', () => {
    const primes = primesUpTo(10 ** 6);
    expect(primes.length).toEqual(78498);
    expect(primes[primes.length - 1]).toEqual(999983);
  });
});
