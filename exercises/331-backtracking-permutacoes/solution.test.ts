import { describe, it, expect } from 'vitest';
import { permute } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   permute([1,2,3])->6 permutacoes

describe('#331 - Backtracking: Permutacoes', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof permute).toBe('function');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(permute([])).toEqual([[]]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(permute([1])).toEqual([[1]]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(permute([1, 1, 1])).toEqual([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]);
  });
});
