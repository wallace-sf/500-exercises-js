import { describe, it, expect } from 'vitest';
import { sumDigits } from './solution';

describe('#019 - Recursion: Digit Sum', () => {
  it('example 1', () => {
    // sumDigits(4029)->15
    expect(sumDigits(4029)).toEqual(15);
  });
  it('example 2', () => {
    // sumDigits(0)->0
    expect(sumDigits(0)).toEqual(0);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 1', () => {
    expect(sumDigits(1)).toEqual(1);
  });
});
