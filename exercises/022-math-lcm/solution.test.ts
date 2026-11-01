import { describe, it, expect } from 'vitest';
import { lcm } from './solution';

describe('#022 - Math: LCM', () => {
  it('example 1', () => {
    // lcm(6,8)->24
    expect(lcm(6,8)).toEqual(24);
  });
  it('example 2', () => {
    // lcm(0,7)->0
    expect(lcm(0,7)).toEqual(0);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('minimum values (all 1s)', () => {
    expect(lcm(1, 1)).toEqual(1);
  });
  it('both zero', () => {
    expect(lcm(0, 0)).toEqual(0);
  });
  it('coprime numbers', () => {
    expect(lcm(4, 9)).toEqual(36);
  });
  it('one divides the other', () => {
    expect(lcm(5, 20)).toEqual(20);
  });
  it('negative numbers', () => {
    expect(lcm(-4, 6)).toEqual(12);
    expect(lcm(-4, -6)).toEqual(12);
  });
  it('large coprime numbers', () => {
    expect(lcm(999999, 1000000)).toEqual(999999000000);
  });
});
