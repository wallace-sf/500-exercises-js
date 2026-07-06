import { describe, it, expect } from 'vitest';
import { findMinRotated } from './solution';

describe('#110 - Busca Binaria: Minimo em Rotacionado', () => {
  it('exemplo 1', () => {
    // findMinRotated([4,5,6,7,0,1,2])->0
    expect(findMinRotated([4,5,6,7,0,1,2])).toEqual(0);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: um unico elemento', () => {
    expect(findMinRotated([4])).toEqual(4);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(findMinRotated([4, 4, 4])).toEqual(4);
  });
});
