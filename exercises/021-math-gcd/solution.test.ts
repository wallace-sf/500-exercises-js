import { describe, it, expect } from 'vitest';
import { gcd } from './solution';

describe('#021 - Math: GCD', () => {
  it('example 1', () => {
    // gcd(54,24)->6
    expect(gcd(54,24)).toEqual(6);
  });
  it('example 2', () => {
    // gcd(0,7)->7
    expect(gcd(0,7)).toEqual(7);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('minimum values (all 1s)', () => {
    expect(gcd(1, 1)).toEqual(1);
  });
  it('second argument is 0', () => {
    expect(gcd(9, 0)).toEqual(9);
  });
  it('equal numbers', () => {
    expect(gcd(12, 12)).toEqual(12);
  });
  it('coprime numbers', () => {
    expect(gcd(17, 5)).toEqual(1);
  });
  it('one divides the other', () => {
    expect(gcd(7, 21)).toEqual(7);
  });
  it('order does not matter', () => {
    expect(gcd(24, 54)).toEqual(6);
  });
  it('consecutive Fibonacci numbers (worst case)', () => {
    expect(gcd(1134903170, 701408733)).toEqual(1);
  });
  it('large numbers', () => {
    expect(gcd(10 ** 15, 2 ** 40)).toEqual(2 ** 15);
  });
});
