import { describe, it, expect } from 'vitest';
import { reverseNumber } from './solution';

describe('#015 - Recursion: Reverse an Integer', () => {
  it('example 1', () => {
    // reverseNumber(1230)->321
    expect(reverseNumber(1230)).toEqual(321);
  });
  it('example 2', () => {
    // reverseNumber(0)->0
    expect(reverseNumber(0)).toEqual(0);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('single digit', () => {
    expect(reverseNumber(7)).toEqual(7);
  });
  it('trailing zero', () => {
    expect(reverseNumber(10)).toEqual(1);
  });
  it('multiple trailing zeros', () => {
    expect(reverseNumber(1000)).toEqual(1);
  });
  it('palindromic number', () => {
    expect(reverseNumber(1001)).toEqual(1001);
  });
  it('zeros in the middle', () => {
    expect(reverseNumber(1020)).toEqual(201);
  });
  it('regular number', () => {
    expect(reverseNumber(12345)).toEqual(54321);
  });
  it('upper bound n = 10^15', () => {
    expect(reverseNumber(10 ** 15)).toEqual(1);
  });
  it('15 different-looking digits', () => {
    expect(reverseNumber(123456789012345)).toEqual(543210987654321);
  });
});
