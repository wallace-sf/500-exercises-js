import { describe, it, expect } from 'vitest';
import { permute } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   permute([1,2,3])->6 permutations

describe('#304 - Backtracking: Permutations', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof permute).toBe('function');
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(permute([])).toEqual([[]]);
  });
  it('edge case: single element', () => {
    expect(permute([1])).toEqual([[1]]);
  });
  it('edge case: all equal elements', () => {
    expect(permute([1, 1, 1])).toEqual([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]);
  });
});
