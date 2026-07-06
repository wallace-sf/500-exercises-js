import { describe, it, expect } from 'vitest';
import { lcm } from './solution';

describe('#024 - Math: LCM', () => {
  it('example 1', () => {
    // lcm(6,8)->24
    expect(lcm(6,8)).toEqual(24);
  });
  it('example 2', () => {
    // lcm(0,7)->0
    expect(lcm(0,7)).toEqual(0);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: minimum values (all 1s)', () => {
    expect(lcm(1, 1)).toEqual(1);
  });
});
