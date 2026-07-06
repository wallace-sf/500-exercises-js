import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   twoSumSorted([-3, 3, 5, 6, 6, 7, 9, 10],9)->(indices)

describe('#033 - Two Pointers: Two Sum (ordenado)', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(twoSumSorted([], 9)).toEqual([-1, -1]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(twoSumSorted([-3], 9)).toEqual([-1, -1]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(twoSumSorted([-3, -3, -3], 9)).toEqual([-1, -1]);
  });
});
