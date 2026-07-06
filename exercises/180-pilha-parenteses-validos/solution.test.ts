import { describe, it, expect } from 'vitest';
import { isValidBrackets } from './solution';

describe('#180 - Pilha: Parenteses Validos', () => {
  it('exemplo 1', () => {
    // isValidBrackets('([])')->true
    expect(isValidBrackets('([])')).toEqual(true);
  });
  it('exemplo 2', () => {
    // isValidBrackets('([)]')->false
    expect(isValidBrackets('([)]')).toEqual(false);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: string vazia', () => {
    expect(isValidBrackets("")).toEqual(true);
  });
  it('caso de borda: um unico caractere', () => {
    expect(isValidBrackets("(")).toEqual(false);
  });
  it('caso de borda: caracteres todos iguais', () => {
    expect(isValidBrackets("(((")).toEqual(false);
  });
});
