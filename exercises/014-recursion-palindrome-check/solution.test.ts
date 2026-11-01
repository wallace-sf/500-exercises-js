import { describe, it, expect } from 'vitest';
import { isPalindrome } from './solution';

describe('#014 - Recursion: Palindrome Check', () => {
  it('example 1', () => {
    // isPalindrome('racecar')->true
    expect(isPalindrome('racecar')).toEqual(true);
  });
  it('example 2', () => {
    // isPalindrome('abca')->false
    expect(isPalindrome('abca')).toEqual(false);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('empty string', () => {
    expect(isPalindrome('')).toEqual(true);
  });
  it('single character', () => {
    expect(isPalindrome('a')).toEqual(true);
  });
  it('two equal characters', () => {
    expect(isPalindrome('aa')).toEqual(true);
  });
  it('two different characters', () => {
    expect(isPalindrome('ab')).toEqual(false);
  });
  it('even length palindrome', () => {
    expect(isPalindrome('abba')).toEqual(true);
  });
  it('comparison is case-sensitive', () => {
    expect(isPalindrome('Aa')).toEqual(false);
  });
  it('spaces count as characters', () => {
    expect(isPalindrome('a b a')).toEqual(true);
    expect(isPalindrome('ab a')).toEqual(false);
  });
  it('mismatch only in the middle', () => {
    expect(isPalindrome('abcxdcba')).toEqual(false);
  });
  it('max length (1000)', () => {
    expect(isPalindrome('ab'.repeat(250) + 'ba'.repeat(250))).toEqual(true);
    expect(isPalindrome('a'.repeat(999) + 'b')).toEqual(false);
  });
});
