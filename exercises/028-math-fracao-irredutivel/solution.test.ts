import { describe, it, expect } from 'vitest';
import { reduceFraction } from './solution';

describe('#028 - Math: Fracao Irredutivel', () => {
  it('exemplo 1', () => {
    // reduceFraction(8,12)->[2,3]
    expect(reduceFraction(8,12)).toEqual([2,3]);
  });
  it('exemplo 2', () => {
    // reduceFraction(-6,9)->[-2,3]
    expect(reduceFraction(-6,9)).toEqual([-2,3]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: valores minimos (todos 1)', () => {
    expect(reduceFraction(1, 1)).toEqual([1, 1]);
  });
});
