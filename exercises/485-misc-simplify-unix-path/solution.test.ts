import { describe, it, expect } from 'vitest';
import { simplifyPath } from './solution';

describe('#485 - Misc: Simplify Unix Path', () => {
  it('example 1', () => {
    // simplifyPath('/a//b/./c/../')->'/a/b'
    expect(simplifyPath('/a//b/./c/../')).toEqual('/a/b');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty string', () => {
    expect(simplifyPath("")).toEqual("/");
  });
  it('edge case: single character', () => {
    expect(simplifyPath("/")).toEqual("/");
  });
  it('edge case: all equal characters', () => {
    expect(simplifyPath("///")).toEqual("/");
  });
});
