import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   groupAnagrams(['eat','tea','tan','ate','nat','bat']) -> groups

describe('#156 - HashMap: Group Anagrams', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof groupAnagrams).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(groupAnagrams([])).toEqual([]);
  });
  it('edge case: single element', () => {
    expect(groupAnagrams(["eat"])).toEqual([["eat"]]);
  });
});
