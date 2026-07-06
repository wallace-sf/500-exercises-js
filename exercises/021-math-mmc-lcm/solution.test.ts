import { describe, it, expect } from 'vitest';
import { lcm } from './solution';

describe('#021 - Math: MMC (LCM)', () => {
  it('exemplo 1', () => {
    // lcm(6,8)->24
    expect(lcm(6,8)).toEqual(24);
  });
  it('exemplo 2', () => {
    // lcm(0,7)->0
    expect(lcm(0,7)).toEqual(0);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: valores minimos (todos 1)', () => {
    expect(lcm(1, 1)).toEqual(1);
  });
});
