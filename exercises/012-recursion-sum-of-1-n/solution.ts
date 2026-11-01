export function sumToN(n: number): number {
  if (n === 0) return 0;

  return n + sumToN(n - 1);
}
