import { describe, it, expect } from 'vitest';
import { isqrt } from './solution';

describe('#108 - Busca Binaria: Raiz Quadrada Inteira', () => {
  it('exemplo 1', () => {
    // isqrt(8)->2
    expect(isqrt(8)).toEqual(2);
  });
  it('exemplo 2', () => {
    // isqrt(16)->4
    expect(isqrt(16)).toEqual(4);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 0', () => {
    expect(isqrt(0)).toEqual(0);
  });
  it('caso de borda: n = 1', () => {
    expect(isqrt(1)).toEqual(1);
  });
});
