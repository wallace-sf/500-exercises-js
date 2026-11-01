# #012 - Recursion: Sum of 1..n

Implement a recursive function that returns the sum from 1 to n (n>=0).

**Signature:** `function sumToN(n) {}`

**Constraints:** 0 <= n <= 1000

**Examples:**

```txt
sumToN(0)->0
sumToN(5)->15
```

**Tags:** recursion

**Hint:** sumToN(n)=n+sumToN(n-1).

**Bonus:** Explain what would happen to your recursive solution in JavaScript if n could be as large as 1e6, and why.

## Approach

I tried summing from right to left because this way there is no need for an array. From right to left, we have to subtract 1 from the number every time the recursive function is executed.

- Bonus: If the parameter is 1e6, a `RangeError: Maximum call stack size exceeded` is thrown, because each recursive call adds a frame to the call stack, and the stack has limited size (in Node, it already fails before n = 10,000).
