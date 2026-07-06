import { describe, it, expect } from 'vitest';
import { stableSortByAge } from './solution';

// Examples from the problem statement that were not automatically converted into assertions:
//   stableSortByAge([{name:'A',age:2},{name:'B',age:1},{name:'C',age:2}]) -> B,A,C

describe('#128 - Sorting: Stable Sort by Age', () => {
  it('exports the function (implement it and add assertions from the README)', () => {
    expect(typeof stableSortByAge).toBe('function');
  });
});
