# #013 - Recursion: Digit Sum

Implement a recursive function that returns the sum of the digits of a non-negative integer.

**Signature:** `function sumDigits(n) {}`

**Constraints:** 0 <= n <= 10^15

**Examples:**

```txt
sumDigits(4029)->15
sumDigits(0)->0
```

**Tags:** recursion, math

**Hint:** Use n % 10 and Math.floor(n / 10).

**Bonus:** Implement an iterative version (no recursion).

## Approach

The first step is to get the last digit and then the remaining digits. With these two numbers, I can add the last digit to the sum of the remaining digits.
Every time the recursive function is executed, its last digit is added to the sum returned by the recursive call. Finally, when the remaining number is zero, it means all digits were added together.
