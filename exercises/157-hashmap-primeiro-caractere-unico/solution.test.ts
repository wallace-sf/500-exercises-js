import { describe, it, expect } from 'vitest';
import { firstUniqChar } from './solution';

describe('#157 - HashMap: Primeiro Caractere Unico', () => {
  it('exemplo 1', () => {
    // firstUniqChar('leetcode')->0
    expect(firstUniqChar('leetcode')).toEqual(0);
  });
  it('exemplo 2', () => {
    // firstUniqChar('aabb')->-1
    expect(firstUniqChar('aabb')).toEqual(-1);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: string vazia', () => {
    expect(firstUniqChar("")).toEqual(-1);
  });
  it('caso de borda: um unico caractere', () => {
    expect(firstUniqChar("l")).toEqual(0);
  });
  it('caso de borda: caracteres todos iguais', () => {
    expect(firstUniqChar("lll")).toEqual(-1);
  });
});
