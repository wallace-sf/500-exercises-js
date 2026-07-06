import { describe, it, expect } from 'vitest';
import { generateParenthesis } from './solution';

describe('#317 - Backtracking: Gerar Parenteses', () => {
  it('exemplo 1', () => {
    // generateParenthesis(3)->['((()))','(()())','(())()','()(())','()()()']
    expect(generateParenthesis(3)).toEqual(['((()))','(()())','(())()','()(())','()()()']);
  });
});

// Casos de borda adicionais (valores esperados verificados com o gabarito)
describe('casos de borda', () => {
  it('caso de borda: n = 0', () => {
    expect(generateParenthesis(0)).toEqual([""]);
  });
  it('caso de borda: n = 1', () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });
});
