import { describe, it, expect } from 'vitest';
import { maxArea } from './solution';

describe('#050 - Two Pointers: Container com Mais Agua', () => {
  it('exemplo 1', () => {
    // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])->49
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(maxArea([])).toEqual(0);
  });
  it('caso de borda: um unico elemento', () => {
    expect(maxArea([1])).toEqual(0);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(maxArea([1, 1, 1])).toEqual(2);
  });
});
