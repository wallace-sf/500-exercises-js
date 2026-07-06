import { describe, it, expect } from 'vitest';
import { Trie } from './solution';

describe('#239 - Trie: Prefixes', () => {
  it('example 1', () => {
    // insert('apple'); search('apple')->true; search('app')->false; startsWith('app')->true
    const obj = new Trie();
    obj.insert('apple');
    expect(obj.search('apple')).toEqual(true);
    expect(obj.search('app')).toEqual(false);
    expect(obj.startsWith('app')).toEqual(true);
  });
});
