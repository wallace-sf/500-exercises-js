import { describe, it, expect } from 'vitest';
import { subarraySum } from './solution';

describe('#081 - Prefix Sum: Subarrays com Soma == K', () => {
  it('exemplo 1', () => {
    // subarraySum([1,1,1],2)->2
    expect(subarraySum([1,1,1],2)).toEqual(2);
  });
  it('exemplo 2', () => {
    // subarraySum([1,2,3],3)->2
    expect(subarraySum([1,2,3],3)).toEqual(2);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(subarraySum([], 2)).toEqual(0);
  });
  it('caso de borda: um unico elemento', () => {
    expect(subarraySum([1], 2)).toEqual(0);
  });
});
