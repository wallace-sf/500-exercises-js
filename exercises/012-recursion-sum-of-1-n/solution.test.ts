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

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 1', () => {
    expect(sumToN(1)).toEqual(1);
  });
});
