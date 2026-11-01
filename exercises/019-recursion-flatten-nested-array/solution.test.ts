import { describe, it, expect } from 'vitest';
import { flatten } from './solution';

describe('#019 - Recursion: Flatten Nested Array', () => {
  it('example 1', () => {
    // flatten([1, [2, [3, [4]], 5]])->[1, 2, 3, 4, 5]
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });
  it('example 2', () => {
    // flatten([])->[]
    expect(flatten([])).toEqual([]);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('already flat', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('only empty arrays', () => {
    expect(flatten([[], [[]], [[[]]]])).toEqual([]);
  });
  it('empty arrays mixed with values', () => {
    expect(flatten([1, [], [2, []]])).toEqual([1, 2]);
  });
  it('order is preserved', () => {
    expect(flatten([[3, 2], [1], 0])).toEqual([3, 2, 1, 0]);
  });
  it('deep nesting (100 levels)', () => {
    let nested: any = [7];
    for (let i = 0; i < 99; i++) nested = [nested];
    expect(flatten(nested)).toEqual([7]);
  });
  it('does not modify the input', () => {
    const input = [1, [2, [3]]];
    flatten(input);
    expect(input).toEqual([1, [2, [3]]]);
  });
  it('many values (10^4)', () => {
    const input = Array.from({ length: 100 }, (_, i) => Array.from({ length: 100 }, (_, j) => i * 100 + j));
    const result = flatten(input);
    expect(result.length).toEqual(10000);
    expect(result[0]).toEqual(0);
    expect(result[9999]).toEqual(9999);
  });
});
