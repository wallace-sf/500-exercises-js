import { describe, it, expect } from 'vitest';
import { isValidBST } from './solution';

describe('#217 - BST: Validate', () => {
  it('example 1', () => {
    // isValidBST([2,1,3])->true
    expect(isValidBST([2,1,3])).toEqual(true);
  });
  it('example 2', () => {
    // isValidBST([5,1,4,null,null,3,6])->false
    expect(isValidBST([5,1,4,null,null,3,6])).toEqual(false);
  });
});
