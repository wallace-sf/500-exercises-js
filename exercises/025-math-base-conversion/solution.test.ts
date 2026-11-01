import { describe, it, expect } from 'vitest';
import { toBase } from './solution';

describe('#025 - Math: Base Conversion', () => {
  it('example 1', () => {
    // toBase(10, 2)->'1010'
    expect(toBase(10, 2)).toEqual('1010');
  });
  it('example 2', () => {
    // toBase(255, 16)->'ff'
    expect(toBase(255, 16)).toEqual('ff');
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('zero in any base', () => {
    expect(toBase(0, 2)).toEqual('0');
    expect(toBase(0, 36)).toEqual('0');
  });
  it('one', () => {
    expect(toBase(1, 2)).toEqual('1');
  });
  it('value equal to the base', () => {
    expect(toBase(8, 8)).toEqual('10');
    expect(toBase(36, 36)).toEqual('10');
  });
  it('single digit below the base', () => {
    expect(toBase(7, 8)).toEqual('7');
  });
  it('last letter digit', () => {
    expect(toBase(35, 36)).toEqual('z');
  });
  it('base 10 is unchanged', () => {
    expect(toBase(1000000000000000, 10)).toEqual('1000000000000000');
  });
  it('MAX_SAFE_INTEGER in base 2', () => {
    expect(toBase(Number.MAX_SAFE_INTEGER, 2)).toEqual('1'.repeat(53));
  });
  it('MAX_SAFE_INTEGER in base 36', () => {
    expect(toBase(Number.MAX_SAFE_INTEGER, 36)).toEqual('2gosa7pa2gv');
  });
});
