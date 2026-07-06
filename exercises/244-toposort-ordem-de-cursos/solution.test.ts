import { describe, it, expect } from 'vitest';
import { findOrder } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   findOrder(4,[[1,0],[2,0],[3,1],[3,2]]) -> ordem valida

describe('#244 - Toposort: Ordem de Cursos', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof findOrder).toBe('function');
  });
});
