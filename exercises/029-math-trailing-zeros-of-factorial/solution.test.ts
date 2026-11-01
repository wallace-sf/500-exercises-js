import { describe, it, expect } from 'vitest';
import { trailingZeros } from './solution';

describe('#029 - Math: Trailing Zeros of Factorial', () => {
  it('example 1', () => {
    // trailingZeros(5)->1
    expect(trailingZeros(5)).toEqual(1);
  });
  it('example 2', () => {
    // trailingZeros(3)->0
    expect(trailingZeros(3)).toEqual(0);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('0! = 1', () => {
    expect(trailingZeros(0)).toEqual(0);
  });
  it('just below 5', () => {
    expect(trailingZeros(4)).toEqual(0);
  });
  it('n = 10', () => {
    expect(trailingZeros(10)).toEqual(2);
  });
  it('just below and at 25', () => {
    expect(trailingZeros(24)).toEqual(4);
    expect(trailingZeros(25)).toEqual(6);
  });
  it('n = 100', () => {
    expect(trailingZeros(100)).toEqual(24);
  });
  it('n = 125', () => {
    expect(trailingZeros(125)).toEqual(31);
  });
  it('n = 1000', () => {
    expect(trailingZeros(1000)).toEqual(249);
  });
  it('upper bound n = 10^9', () => {
    expect(trailingZeros(10 ** 9)).toEqual(249999998);
  });
});
