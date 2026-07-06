import { describe, it, expect } from 'vitest';
import { coinChange } from './solution';

describe('#435 - DP: Coin Change', () => {
  it('exemplo 1', () => {
    // coinChange([1,2,5],11)->3
    expect(coinChange([1,2,5],11)).toEqual(3);
  });
  it('exemplo 2', () => {
    // coinChange([2],3)->-1
    expect(coinChange([2],3)).toEqual(-1);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(coinChange([], 11)).toEqual(-1);
  });
  it('caso de borda: um unico elemento', () => {
    expect(coinChange([1], 11)).toEqual(11);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(coinChange([1, 1, 1], 11)).toEqual(11);
  });
});
