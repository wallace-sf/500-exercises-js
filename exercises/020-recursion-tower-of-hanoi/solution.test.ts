import { describe, it, expect } from 'vitest';
import { hanoi } from './solution';

function isValidSolution(n: number, moves: [string, string][]): boolean {
  const pegs: Record<string, number[]> = { A: [], B: [], C: [] };
  for (let disc = n; disc >= 1; disc--) pegs.A.push(disc);
  for (const [from, to] of moves) {
    const disc = pegs[from].pop();
    if (disc === undefined) return false;
    const top = pegs[to][pegs[to].length - 1];
    if (top !== undefined && top < disc) return false;
    pegs[to].push(disc);
  }
  return pegs.A.length === 0 && pegs.B.length === 0 && pegs.C.length === n;
}

describe('#020 - Recursion: Tower of Hanoi', () => {
  it('example 1', () => {
    // hanoi(1, 'A', 'C', 'B')->[['A', 'C']]
    expect(hanoi(1, 'A', 'C', 'B')).toEqual([['A', 'C']]);
  });
  it('example 2', () => {
    // hanoi(2, 'A', 'C', 'B')->[['A', 'B'], ['A', 'C'], ['B', 'C']]
    expect(hanoi(2, 'A', 'C', 'B')).toEqual([['A', 'B'], ['A', 'C'], ['B', 'C']]);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('n = 0 needs no moves', () => {
    expect(hanoi(0, 'A', 'C', 'B')).toEqual([]);
  });
  it('n = 3', () => {
    expect(hanoi(3, 'A', 'C', 'B')).toEqual([
      ['A', 'C'], ['A', 'B'], ['C', 'B'], ['A', 'C'], ['B', 'A'], ['B', 'C'], ['A', 'C'],
    ]);
  });
  it('respects the given peg names', () => {
    expect(hanoi(1, 'X', 'Y', 'Z')).toEqual([['X', 'Y']]);
  });
  it('n = 10 is valid and minimal', () => {
    const moves = hanoi(10, 'A', 'C', 'B');
    expect(moves.length).toEqual(1023);
    expect(isValidSolution(10, moves)).toEqual(true);
  });
  it('upper bound n = 20 is valid and minimal', () => {
    const moves = hanoi(20, 'A', 'C', 'B');
    expect(moves.length).toEqual(1048575);
    expect(isValidSolution(20, moves)).toEqual(true);
  });
});
