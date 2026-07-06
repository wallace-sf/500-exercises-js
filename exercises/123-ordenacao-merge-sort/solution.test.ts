import { describe, it, expect } from 'vitest';
import { mergeSort } from './solution';

describe('#123 - Ordenacao: Merge Sort', () => {
  it('exemplo 1', () => {
    // mergeSort([5,2,4,1])->[1,2,4,5]
    expect(mergeSort([5,2,4,1])).toEqual([1,2,4,5]);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(mergeSort([])).toEqual([]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(mergeSort([5])).toEqual([5]);
  });
  it('caso de borda: elementos todos iguais', () => {
    expect(mergeSort([5, 5, 5])).toEqual([5, 5, 5]);
  });
});
