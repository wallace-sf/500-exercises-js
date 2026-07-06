import { describe, it, expect } from 'vitest';
import { coinChange } from './solution';

describe('#417 - DP: Coin Change', () => {
  it('example 1', () => {
    // coinChange([1,2,5],11)->3
    expect(coinChange([1,2,5],11)).toEqual(3);
  });
  it('example 2', () => {
    // coinChange([2],3)->-1
    expect(coinChange([2],3)).toEqual(-1);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(coinChange([], 11)).toEqual(-1);
  });
  it('edge case: single element', () => {
    expect(coinChange([1], 11)).toEqual(11);
  });
  it('edge case: all equal elements', () => {
    expect(coinChange([1, 1, 1], 11)).toEqual(11);
  });
});
