import { describe, it, expect } from 'vitest';
import { rangeAdd } from './solution';

describe('#091 - Difference Array: Range Add', () => {
  it('exemplo 1', () => {
    // rangeAdd(5,[[1,3,2],[2,4,3],[0,2,-2]])->[-2,0,3,5,3]
    expect(rangeAdd(5,[[1,3,2],[2,4,3],[0,2,-2]])).toEqual([-2,0,3,5,3]);
  });
});
