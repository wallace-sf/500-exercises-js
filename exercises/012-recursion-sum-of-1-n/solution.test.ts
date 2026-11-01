import { describe, it, expect } from 'vitest';
import { sumToN } from './solution';

describe('#012 - Recursion: Sum of 1..n', () => {
  it('example 1', () => {
    // sumToN(0)->0
    expect(sumToN(0)).toEqual(0);
  });
  it('example 2', () => {
    // sumToN(5)->15
    expect(sumToN(5)).toEqual(15);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('edge case: n = 1', () => {
    expect(sumToN(1)).toEqual(1);
  });
  it('n = 2', () => {
    expect(sumToN(2)).toEqual(3);
  });
  it('n = 10', () => {
    expect(sumToN(10)).toEqual(55);
  });
  it('n = 100', () => {
    expect(sumToN(100)).toEqual(5050);
  });
  it('upper bound n = 1000', () => {
    expect(sumToN(1000)).toEqual(500500);
  });
});
