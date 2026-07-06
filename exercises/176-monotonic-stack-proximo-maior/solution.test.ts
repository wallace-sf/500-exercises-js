import { describe, it, expect } from 'vitest';
import { nextGreater } from './solution';

describe('#176 - Monotonic Stack: Proximo Maior', () => {
  it('exemplo 1', () => {
    // nextGreater([2,1,2,4,3])->[4,2,4,-1,-1]
    expect(nextGreater([2,1,2,4,3])).toEqual([4,2,4,-1,-1]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(nextGreater([])).toEqual([]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(nextGreater([2])).toEqual([-1]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(nextGreater([2, 2, 2])).toEqual([-1, -1, -1]);
  });
});
