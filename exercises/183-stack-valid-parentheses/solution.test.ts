import { describe, it, expect } from 'vitest';
import { isValidBrackets } from './solution';

describe('#183 - Stack: Valid Parentheses', () => {
  it('example 1', () => {
    // isValidBrackets('([])')->true
    expect(isValidBrackets('([])')).toEqual(true);
  });
  it('example 2', () => {
    // isValidBrackets('([)]')->false
    expect(isValidBrackets('([)]')).toEqual(false);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty string', () => {
    expect(isValidBrackets("")).toEqual(true);
  });
  it('edge case: single character', () => {
    expect(isValidBrackets("(")).toEqual(false);
  });
  it('edge case: all equal characters', () => {
    expect(isValidBrackets("(((")).toEqual(false);
  });
});
