import { describe, it, expect } from 'vitest';
import { countBits } from './solution';

describe('#490 - Bitwise: Count Bits', () => {
  it('example 1', () => {
    // countBits(5)->[0,1,1,2,1,2]
    expect(countBits(5)).toEqual([0,1,1,2,1,2]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 0', () => {
    expect(countBits(0)).toEqual([0]);
  });
  it('edge case: n = 1', () => {
    expect(countBits(1)).toEqual([0, 1]);
  });
});
