import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './solution';

// Exemplos do enunciado não convertidos automaticamente em asserções:
//   groupAnagrams(['eat','tea','tan','ate','nat','bat']) -> grupos

describe('#162 - HashMap: Agrupar Anagramas', () => {
  it('exporta a função (implemente e adicione asserções do README)', () => {
    expect(typeof groupAnagrams).toBe('function');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: array vazio', () => {
    expect(groupAnagrams([])).toEqual([]);
  });
  it('caso de borda: um unico elemento', () => {
    expect(groupAnagrams(["eat"])).toEqual([["eat"]]);
  });
});
