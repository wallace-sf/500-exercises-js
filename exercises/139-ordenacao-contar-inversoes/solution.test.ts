import { describe, it, expect } from 'vitest';
import { countInversions } from './solution';

describe('#139 - Ordenacao: Contar Inversoes', () => {
  it('exemplo 1', () => {
    // countInversions([2,4,1,3,5])->3
    expect(countInversions([2,4,1,3,5])).toEqual(3);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(countInversions([])).toEqual(0);
  });
  it('caso de borda: um unico elemento', () => {
    expect(countInversions([2])).toEqual(0);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(countInversions([2, 2, 2])).toEqual(0);
  });
});
