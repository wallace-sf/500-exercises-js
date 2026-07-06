import { describe, it, expect } from 'vitest';
import { minSubArrayLen } from './solution';

describe('#062 - Sliding Window: Smallest Subarray With Sum >= S', () => {
  it('example 1', () => {
    // minSubArrayLen(7,[2,3,1,2,4,3])->2
    expect(minSubArrayLen(7,[2,3,1,2,4,3])).toEqual(2);
  });
});
