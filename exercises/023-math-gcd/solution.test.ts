import { describe, it, expect } from 'vitest';
import { gcd } from './solution';

describe('#023 - Math: GCD', () => {
  it('example 1', () => {
    // gcd(54,24)->6
    expect(gcd(54,24)).toEqual(6);
  });
  it('example 2', () => {
    // gcd(0,7)->7
    expect(gcd(0,7)).toEqual(7);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: minimum values (all 1s)', () => {
    expect(gcd(1, 1)).toEqual(1);
  });
});
