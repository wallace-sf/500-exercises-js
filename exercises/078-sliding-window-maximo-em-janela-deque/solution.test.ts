import { describe, it, expect } from 'vitest';
import { maxSlidingWindow } from './solution';

describe('#078 - Sliding Window: Maximo em Janela (deque)', () => {
  it('exemplo 1', () => {
    // maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)->[3,3,5,5,6,7]
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)).toEqual([3,3,5,5,6,7]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(maxSlidingWindow([], 3)).toEqual([]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(maxSlidingWindow([1], 3)).toEqual([]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(maxSlidingWindow([1, 1, 1], 3)).toEqual([1]);
  });
});
