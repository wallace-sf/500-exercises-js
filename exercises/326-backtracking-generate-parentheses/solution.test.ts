import { describe, it, expect } from 'vitest';
import { generateParenthesis } from './solution';

describe('#326 - Backtracking: Generate Parentheses', () => {
  it('example 1', () => {
    // generateParenthesis(3)->['((()))','(()())','(())()','()(())','()()()']
    expect(generateParenthesis(3)).toEqual(['((()))','(()())','(())()','()(())','()()()']);
  });
});

// Additional edge cases (expected values verified against the reference solution)
describe('edge cases', () => {
  it('edge case: n = 0', () => {
    expect(generateParenthesis(0)).toEqual([""]);
  });
  it('edge case: n = 1', () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });
});
