import { describe, it, expect } from 'vitest';
import { stableSortByAge } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   stableSortByAge([{name:'A',age:2},{name:'B',age:1},{name:'C',age:2}]) -> B,A,C

describe('#125 - Ordenacao: Stable Sort por Age', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof stableSortByAge).toBe('function');
  });
});
