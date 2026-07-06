import { describe, it, expect } from 'vitest';
import { MyQueue } from './solution';

describe('#187 - Queue: Two Stacks', () => {
  it('example 1', () => {
    // push(1),push(2),peek()->1,pop()->1,empty()->false
    const obj = new MyQueue();
    obj.push(1);
    obj.push(2);
    expect(obj.peek()).toEqual(1);
    expect(obj.pop()).toEqual(1);
    expect(obj.empty()).toEqual(false);
  });
});
