import { describe, it, expect } from 'vitest';
import { isqrt } from './solution';

describe('#114 - Binary Search: Integer Square Root', () => {
  it('example 1', () => {
    // isqrt(8)->2
    expect(isqrt(8)).toEqual(2);
  });
  it('example 2', () => {
    // isqrt(16)->4
    expect(isqrt(16)).toEqual(4);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 0', () => {
    expect(isqrt(0)).toEqual(0);
  });
  it('edge case: n = 1', () => {
    expect(isqrt(1)).toEqual(1);
  });
});
