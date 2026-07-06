import { describe, it, expect } from 'vitest';
import { twoSumSorted } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   twoSumSorted([6, 8, 9, 12, 12, 12, 14, 15],7)->(indices)

describe('#039 - Two Pointers: Two Sum (ordenado)', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof twoSumSorted).toBe('function');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(twoSumSorted([], 7)).toEqual([-1, -1]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(twoSumSorted([6], 7)).toEqual([-1, -1]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(twoSumSorted([6, 6, 6], 7)).toEqual([-1, -1]);
  });
});
