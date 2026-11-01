import { describe, it, expect } from 'vitest';
import { isPrime } from './solution';

describe('#024 - Math: Is Prime', () => {
  it('example 1', () => {
    // isPrime(7)->true
    expect(isPrime(7)).toEqual(true);
  });
  it('example 2', () => {
    // isPrime(1)->false
    expect(isPrime(1)).toEqual(false);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('0 is not prime', () => {
    expect(isPrime(0)).toEqual(false);
  });
  it('smallest primes', () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
  });
  it('small composites', () => {
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(9)).toEqual(false);
  });
  it('square of a prime', () => {
    expect(isPrime(25)).toEqual(false);
    expect(isPrime(49)).toEqual(false);
  });
  it('medium primes', () => {
    expect(isPrime(97)).toEqual(true);
    expect(isPrime(7919)).toEqual(true);
  });
  it('upper bound 10^12 is composite', () => {
    expect(isPrime(10 ** 12)).toEqual(false);
  });
  it('large prime close to 10^12', () => {
    expect(isPrime(999999999989)).toEqual(true);
  });
  it('square of a large prime (999983^2)', () => {
    expect(isPrime(999966000289)).toEqual(false);
  });
});
