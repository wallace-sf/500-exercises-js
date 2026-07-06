import { describe, it, expect } from 'vitest';
import { mergeSort } from './solution';

describe('#135 - Sorting: Merge Sort', () => {
  it('example 1', () => {
    // mergeSort([5,2,4,1])->[1,2,4,5]
    expect(mergeSort([5,2,4,1])).toEqual([1,2,4,5]);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });
  it('edge case: single element', () => {
    expect(mergeSort([5])).toEqual([5]);
  });
  it('edge case: all equal elements', () => {
    expect(mergeSort([5, 5, 5])).toEqual([5, 5, 5]);
  });
});
