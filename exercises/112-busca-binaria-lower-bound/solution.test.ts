import { describe, it, expect } from 'vitest';
import { lowerBound } from './solution';

describe('#112 - Busca Binaria: Lower Bound', () => {
  it('exemplo 1', () => {
    // lowerBound([1,3,3,7],3)->1
    expect(lowerBound([1,3,3,7],3)).toEqual(1);
  });
  it('exemplo 2', () => {
    // lowerBound([1,3,3,7],9)->4
    expect(lowerBound([1,3,3,7],9)).toEqual(4);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(lowerBound([], 3)).toEqual(0);
  });
  it('caso de borda: um unico elemento', () => {
    expect(lowerBound([1], 3)).toEqual(1);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(lowerBound([1, 1, 1], 3)).toEqual(3);
  });
});
