import { describe, it, expect } from 'vitest';
import { uniquePaths } from './solution';

describe('#428 - DP 2D: Unique Paths', () => {
  it('example 1', () => {
    // uniquePaths(3,2)->3
    expect(uniquePaths(3,2)).toEqual(3);
  });
  it('example 2', () => {
    // uniquePaths(3,7)->28
    expect(uniquePaths(3,7)).toEqual(28);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: minimum values (all 1s)', () => {
    expect(uniquePaths(1, 1)).toEqual(1);
  });
});
