import { describe, it, expect } from 'vitest';
import { fib } from './solution';

describe('#018 - Recursion: Fibonacci with Memoization', () => {
  it('example 1', () => {
    // fib(10)->55
    expect(fib(10)).toEqual(55);
  });
  it('example 2', () => {
    // fib(0)->0
    expect(fib(0)).toEqual(0);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('n = 1', () => {
    expect(fib(1)).toEqual(1);
  });
  it('n = 2', () => {
    expect(fib(2)).toEqual(1);
  });
  it('n = 20', () => {
    expect(fib(20)).toEqual(6765);
  });
  it('n = 50', () => {
    expect(fib(50)).toEqual(12586269025);
  });
  it('upper bound n = 78', () => {
    expect(fib(78)).toEqual(8944394323791464);
  });
  it('consecutive calls stay consistent', () => {
    for (let i = 2; i <= 78; i++) {
      expect(fib(i)).toEqual(fib(i - 1) + fib(i - 2));
    }
  });
});
