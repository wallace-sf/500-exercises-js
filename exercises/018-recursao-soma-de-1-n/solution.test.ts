import { describe, it, expect } from 'vitest';
import { sumToN } from './solution';

describe('#018 - Recursao: Soma de 1..n', () => {
  it('exemplo 1', () => {
    // sumToN(0)->0
    expect(sumToN(0)).toEqual(0);
  });
  it('exemplo 2', () => {
    // sumToN(5)->15
    expect(sumToN(5)).toEqual(15);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 1', () => {
    expect(sumToN(1)).toEqual(1);
  });
});
