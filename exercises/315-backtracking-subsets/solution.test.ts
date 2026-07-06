import { describe, it, expect } from 'vitest';
import { subsets } from './solution';

describe('#315 - Backtracking: Subsets', () => {
  it('example 1', () => {
    // subsets([1,2])->[[],[1],[2],[1,2]]
    expect(subsets([1,2])).toEqual([[],[1],[2],[1,2]]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(subsets([])).toEqual([[]]);
  });
  it('edge case: single element', () => {
    expect(subsets([1])).toEqual([[], [1]]);
  });
  it('edge case: all equal elements', () => {
    expect(subsets([1, 1, 1])).toEqual([[], [1], [1], [1, 1], [1], [1, 1], [1, 1], [1, 1, 1]]);
  });
});
