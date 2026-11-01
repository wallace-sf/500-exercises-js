const DEFAULT_COUNT = 0;

export function countDigit(n: number): number {
  if (n < 0 || n > 10 ** 15) return DEFAULT_COUNT;

  const integerPart = Math.trunc(n / 10);
  const decimalPart = n % 10;
  let counter = DEFAULT_COUNT;

  counter = decimalPart === 2 ? counter + 1 : DEFAULT_COUNT;

  return integerPart < 1 ? counter : countDigit(integerPart) + counter;
}
