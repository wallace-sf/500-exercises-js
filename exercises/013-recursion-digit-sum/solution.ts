export function sumDigits(n: number): number {
  if (n === 0) return 0;

  const lastDigit = n % 10;
  const remainingDigits = Math.trunc(n / 10);

  return sumDigits(remainingDigits) + lastDigit;
}
