import { describe, it, expect } from 'vitest';
import { maxSubArray } from './solution';

describe('#418 - DP: Max Subarray (Kadane)', () => {
  it('exemplo 1', () => {
    // maxSubArray([-2,1,-3,4,-1,2,1,-5,4])->6
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: um unico elemento', () => {
    expect(maxSubArray([-2])).toEqual(-2);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(maxSubArray([-2, -2, -2])).toEqual(-2);
  });
});
