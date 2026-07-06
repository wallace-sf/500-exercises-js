import { describe, it, expect } from 'vitest';
import { countComponents } from './solution';

describe('#264 - Graph DFS: Connected Components', () => {
  it('example 1', () => {
    // countComponents(5,[[0,1],[1,2],[3,4]])->2
    expect(countComponents(5,[[0,1],[1,2],[3,4]])).toEqual(2);
  });
});
