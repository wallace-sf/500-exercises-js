import { describe, it, expect } from 'vitest';
import { twoSum } from './solution';

describe('#149 - HashMap: Two Sum', () => {
  it('exemplo 1', () => {
    // twoSum([2,7,11,15],9)->[0,1]
    expect(twoSum([2,7,11,15],9)).toEqual([0,1]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(twoSum([], 9)).toEqual([-1, -1]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(twoSum([2], 9)).toEqual([-1, -1]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(twoSum([2, 2, 2], 9)).toEqual([-1, -1]);
  });
});
