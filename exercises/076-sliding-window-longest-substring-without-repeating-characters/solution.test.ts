import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './solution';

describe('#076 - Sliding Window: Longest Substring Without Repeating Characters', () => {
  it('example 1', () => {
    // lengthOfLongestSubstring('abcbde')->4
    expect(lengthOfLongestSubstring('abcbde')).toEqual(4);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty string', () => {
    expect(lengthOfLongestSubstring("")).toEqual(0);
  });
  it('edge case: single character', () => {
    expect(lengthOfLongestSubstring("a")).toEqual(1);
  });
  it('edge case: all equal characters', () => {
    expect(lengthOfLongestSubstring("aaa")).toEqual(1);
  });
});
