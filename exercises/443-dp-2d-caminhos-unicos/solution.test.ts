import { describe, it, expect } from 'vitest';
import { uniquePaths } from './solution';

describe('#443 - DP 2D: Caminhos Unicos', () => {
  it('exemplo 1', () => {
    // uniquePaths(3,2)->3
    expect(uniquePaths(3,2)).toEqual(3);
  });
  it('exemplo 2', () => {
    // uniquePaths(3,7)->28
    expect(uniquePaths(3,7)).toEqual(28);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: valores minimos (todos 1)', () => {
    expect(uniquePaths(1, 1)).toEqual(1);
  });
});
