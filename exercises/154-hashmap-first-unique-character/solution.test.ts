import { describe, it, expect } from 'vitest';
import { firstUniqChar } from './solution';

describe('#154 - HashMap: First Unique Character', () => {
  it('example 1', () => {
    // firstUniqChar('leetcode')->0
    expect(firstUniqChar('leetcode')).toEqual(0);
  });
  it('example 2', () => {
    // firstUniqChar('aabb')->-1
    expect(firstUniqChar('aabb')).toEqual(-1);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty string', () => {
    expect(firstUniqChar("")).toEqual(-1);
  });
  it('edge case: single character', () => {
    expect(firstUniqChar("l")).toEqual(0);
  });
  it('edge case: all equal characters', () => {
    expect(firstUniqChar("lll")).toEqual(-1);
  });
});
