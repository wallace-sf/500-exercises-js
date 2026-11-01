import { describe, it, expect } from 'vitest';
import { binarySearch } from './solution';

describe('#016 - Recursion: Binary Search', () => {
  it('example 1', () => {
    // binarySearch([1, 3, 5, 7, 9], 7)->3
    expect(binarySearch([1, 3, 5, 7, 9], 7)).toEqual(3);
  });
  it('example 2', () => {
    // binarySearch([1, 3, 5, 7, 9], 4)->-1
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toEqual(-1);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('empty array', () => {
    expect(binarySearch([], 5)).toEqual(-1);
  });
  it('single element found', () => {
    expect(binarySearch([5], 5)).toEqual(0);
  });
  it('single element not found', () => {
    expect(binarySearch([5], 3)).toEqual(-1);
  });
  it('target is the first element', () => {
    expect(binarySearch([2, 4, 6, 8], 2)).toEqual(0);
  });
  it('target is the last element', () => {
    expect(binarySearch([2, 4, 6, 8], 8)).toEqual(3);
  });
  it('target smaller than all', () => {
    expect(binarySearch([2, 4, 6, 8], 1)).toEqual(-1);
  });
  it('target larger than all', () => {
    expect(binarySearch([2, 4, 6, 8], 9)).toEqual(-1);
  });
  it('negative numbers', () => {
    expect(binarySearch([-10, -3, 0, 4], -3)).toEqual(1);
  });
  it('large array (10^5 elements)', () => {
    const arr = Array.from({ length: 100000 }, (_, i) => i * 2);
    expect(binarySearch(arr, 0)).toEqual(0);
    expect(binarySearch(arr, 199998)).toEqual(99999);
    expect(binarySearch(arr, 123456)).toEqual(61728);
    expect(binarySearch(arr, 123457)).toEqual(-1);
  });
});
