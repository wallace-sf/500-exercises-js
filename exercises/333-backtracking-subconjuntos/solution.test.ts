import { describe, it, expect } from 'vitest';
import { subsets } from './solution';

describe('#333 - Backtracking: Subconjuntos', () => {
  it('exemplo 1', () => {
    // subsets([1,2])->[[],[1],[2],[1,2]]
    expect(subsets([1,2])).toEqual([[],[1],[2],[1,2]]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(subsets([])).toEqual([[]]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(subsets([1])).toEqual([[], [1]]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(subsets([1, 1, 1])).toEqual([[], [1], [1], [1, 1], [1], [1, 1], [1, 1], [1, 1, 1]]);
  });
});
