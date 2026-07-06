import { describe, it, expect } from 'vitest';
import { levelOrder } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   root=[3,9,20,null,null,15,7]->[[3],[9,20],[15,7]]

describe('#234 - Arvore: Level Order', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof levelOrder).toBe('function');
  });
});
