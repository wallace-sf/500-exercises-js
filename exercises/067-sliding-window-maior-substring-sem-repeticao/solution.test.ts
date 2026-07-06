import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './solution';

describe('#067 - Sliding Window: Maior Substring Sem Repeticao', () => {
  it('exemplo 1', () => {
    // lengthOfLongestSubstring('abcbde')->4
    expect(lengthOfLongestSubstring('abcbde')).toEqual(4);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: string vazia', () => {
    expect(lengthOfLongestSubstring("")).toEqual(0);
  });
  it('caso de borda: um unico caractere', () => {
    expect(lengthOfLongestSubstring("a")).toEqual(1);
  });
  it('caso de borda: caracteres todos iguais', () => {
    expect(lengthOfLongestSubstring("aaa")).toEqual(1);
  });
});
