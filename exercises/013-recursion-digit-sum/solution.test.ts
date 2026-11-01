import { describe, it, expect } from 'vitest';
import { sumDigits } from './solution';

describe('#013 - Recursion: Digit Sum', () => {
  it('example 1', () => {
    // sumDigits(4029)->15
    expect(sumDigits(4029)).toEqual(15);
  });
  it('example 2', () => {
    // sumDigits(0)->0
    expect(sumDigits(0)).toEqual(0);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('edge case: n = 1', () => {
    expect(sumDigits(1)).toEqual(1);
  });
  it('largest single digit', () => {
    expect(sumDigits(9)).toEqual(9);
  });
  it('trailing zero', () => {
    expect(sumDigits(10)).toEqual(1);
  });
  it('multiple trailing zeros', () => {
    expect(sumDigits(100)).toEqual(1);
  });
  it('zero in the middle', () => {
    expect(sumDigits(505)).toEqual(10);
  });
  it('repeated digits', () => {
    expect(sumDigits(11111)).toEqual(5);
  });
  it('all nines', () => {
    expect(sumDigits(999)).toEqual(27);
  });
  it('every digit from 1 to 9', () => {
    expect(sumDigits(123456789)).toEqual(45);
  });
  it('upper bound n = 10^15', () => {
    expect(sumDigits(10 ** 15)).toEqual(1);
  });
  it('largest 15-digit number', () => {
    expect(sumDigits(999999999999999)).toEqual(135);
  });
});
