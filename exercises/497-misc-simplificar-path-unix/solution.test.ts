import { describe, it, expect } from 'vitest';
import { simplifyPath } from './solution';

describe('#497 - Misc: Simplificar Path Unix', () => {
  it('exemplo 1', () => {
    // simplifyPath('/a//b/./c/../')->'/a/b'
    expect(simplifyPath('/a//b/./c/../')).toEqual('/a/b');
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: string vazia', () => {
    expect(simplifyPath("")).toEqual("/");
  });
  it('caso de borda: um unico caractere', () => {
    expect(simplifyPath("/")).toEqual("/");
  });
  it('caso de borda: caracteres todos iguais', () => {
    expect(simplifyPath("///")).toEqual("/");
  });
});
