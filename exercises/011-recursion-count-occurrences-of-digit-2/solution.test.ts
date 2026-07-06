import { describe, it, expect } from 'vitest';
import { countDigit } from './solution';

describe('#011 - Recursion: Count Occurrences of Digit 2', () => {
  it('example 1', () => {
    // countDigit(77127)->2
    expect(countDigit(77127)).toEqual(2);
  });
  it('example 2', () => {
    // countDigit(0)->0
    expect(countDigit(0)).toEqual(0);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 1', () => {
    expect(countDigit(1)).toEqual(0);
  });
});
