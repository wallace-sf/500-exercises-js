import { describe, it, expect } from 'vitest';
import { sumDigits } from './solution';

describe('#019 - Recursao: Soma de Digitos', () => {
  it('exemplo 1', () => {
    // sumDigits(4029)->15
    expect(sumDigits(4029)).toEqual(15);
  });
  it('exemplo 2', () => {
    // sumDigits(0)->0
    expect(sumDigits(0)).toEqual(0);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 1', () => {
    expect(sumDigits(1)).toEqual(1);
  });
});
