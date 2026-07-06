import { describe, it, expect } from 'vitest';
import { countBits } from './solution';

describe('#487 - Bitwise: Count Bits', () => {
  it('exemplo 1', () => {
    // countBits(5)->[0,1,1,2,1,2]
    expect(countBits(5)).toEqual([0,1,1,2,1,2]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 0', () => {
    expect(countBits(0)).toEqual([0]);
  });
  it('caso de borda: n = 1', () => {
    expect(countBits(1)).toEqual([0, 1]);
  });
});
