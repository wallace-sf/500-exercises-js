import { describe, it, expect } from 'vitest';
import { modPow } from './solution';

describe('#030 - Math: Modular Exponentiation', () => {
  it('example 1', () => {
    // modPow(2n, 10n, 1000n)->24n
    expect(modPow(2n, 10n, 1000n)).toEqual(24n);
  });
  it('example 2', () => {
    // modPow(3n, 0n, 7n)->1n
    expect(modPow(3n, 0n, 7n)).toEqual(1n);
  });
});

// Additional edge cases
describe('edge cases', () => {
  it('0^0 is 1', () => {
    expect(modPow(0n, 0n, 5n)).toEqual(1n);
  });
  it('zero base', () => {
    expect(modPow(0n, 5n, 7n)).toEqual(0n);
  });
  it('modulus 1', () => {
    expect(modPow(5n, 3n, 1n)).toEqual(0n);
    expect(modPow(5n, 0n, 1n)).toEqual(0n);
  });
  it('base larger than the modulus', () => {
    expect(modPow(10n, 1n, 3n)).toEqual(1n);
  });
  it('huge exponent', () => {
    expect(modPow(2n, 10n ** 18n, 1000000007n)).toEqual(719476260n);
  });
  it('Fermat\'s little theorem', () => {
    expect(modPow(123456789n, 1000000006n, 1000000007n)).toEqual(1n);
  });
  it('everything close to 10^18', () => {
    expect(modPow(10n ** 18n - 1n, 10n ** 18n, 10n ** 18n)).toEqual(1n);
    expect(modPow(987654321987654321n, 123456789123456789n, 999999999999999989n)).toEqual(383216607206238546n);
  });
});
