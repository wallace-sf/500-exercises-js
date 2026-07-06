import { describe, it, expect } from 'vitest';
import { minSubArrayLen } from './solution';

describe('#059 - Sliding Window: Menor Subarray com Soma >= S', () => {
  it('exemplo 1', () => {
    // minSubArrayLen(7,[2,3,1,2,4,3])->2
    expect(minSubArrayLen(7,[2,3,1,2,4,3])).toEqual(2);
  });
});
