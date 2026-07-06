import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   twoSumSorted([-2, 1, 2, 5, 5, 8, 9, 9],5)->(indices)

describe('#036 - Two Pointers: Two Sum (ordenado)', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(twoSumSorted([], 5)).toEqual([-1, -1]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(twoSumSorted([-2], 5)).toEqual([-1, -1]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(twoSumSorted([-2, -2, -2], 5)).toEqual([-1, -1]);
  });
});
