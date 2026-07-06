import { describe, it, expect } from 'vitest';
import { mergeIntervals } from './solution';

describe('#483 - Intervalos: Mesclar', () => {
  it('exemplo 1', () => {
    // mergeIntervals([[1,3],[2,6],[8,10],[15,18]])->[[1,6],[8,10],[15,18]]
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });
});
