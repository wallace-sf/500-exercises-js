import { describe, it, expect } from 'vitest';
import { gcd } from './solution';

describe('#026 - Math: MDC (GCD)', () => {
  it('exemplo 1', () => {
    // gcd(54,24)->6
    expect(gcd(54,24)).toEqual(6);
  });
  it('exemplo 2', () => {
    // gcd(0,7)->7
    expect(gcd(0,7)).toEqual(7);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: valores minimos (todos 1)', () => {
    expect(gcd(1, 1)).toEqual(1);
  });
});
