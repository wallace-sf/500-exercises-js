import { describe, it, expect } from 'vitest';
import { PrefixSum } from './solution';

describe('#092 - Prefix Sum: Soma de Intervalo', () => {
  it('exemplo 1', () => {
    // ps.sumRange(1,3)->4
    const nums = [3,-2,5,1];
    const obj = new PrefixSum(nums);
    expect(obj.sumRange(1,3)).toEqual(4);
  });
});
