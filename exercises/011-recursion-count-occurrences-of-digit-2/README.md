# #011 - Recursion: Count Occurrences of Digit 2

Count how many times the digit 2 appears in n (a non-negative integer) using recursion.

**Signature:** `function countDigit(n) {}`

**Constraints:** 0 <= n <= 10^15

**Examples:**

```txt
countDigit(77127)->1
countDigit(0)->0
```

**Tags:** recursion, math

**Hint:** Base case n == 0; add 1 if the last digit matches.

**Bonus:** Solve it in O(d) time, where d is the number of digits (O(log n)), without converting n to a string.

## Approach

Recursion that peels off one digit per call, from right to left:

- Reject inputs outside the constraints (`n < 0 || n > 10^15`), returning 0.
- `n % 10` gives the last digit; `Math.trunc(n / 10)` gives the number without it.
- The current call counts 1 if the last digit is 2, otherwise 0.
- Stop condition: when the remaining number is less than 1 (only one digit was left), return the current count; otherwise return the current count plus the recursive call on the remaining number.

Complexity: O(d) time and O(d) call-stack space, where d is the number of digits (at most 16).

## Reference solution

A cleaner version of the same idea, with the base case at `n === 0` (as in the hint):

```ts
export function countDigit(n: number): number {
  if (n === 0) return 0;

  const lastDigit = n % 10;
  const rest = Math.trunc(n / 10);

  return (lastDigit === 2 ? 1 : 0) + countDigit(rest);
}
```

Differences from my approach:

- The base case comes first and on its own (`n === 0`), instead of stopping when one digit is left.
- `lastDigit` / `rest` describe what the values are (`n % 10` is the last digit, not a decimal part).
- The match is a single expression (`lastDigit === 2 ? 1 : 0`) instead of declaring and reassigning a counter.
- No range check: the constraints already guarantee `0 <= n <= 10^15`, and checking on every recursive call is unnecessary.
