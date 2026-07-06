import { describe, it, expect } from 'vitest';
import { countDigit } from './solution';

describe('#020 - Recursao: Contar Ocorrencias do Digito 2', () => {
  it('exemplo 1', () => {
    // countDigit(77127)->2
    expect(countDigit(77127)).toEqual(2);
  });
  it('exemplo 2', () => {
    // countDigit(0)->0
    expect(countDigit(0)).toEqual(0);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 1', () => {
    expect(countDigit(1)).toEqual(0);
  });
});
