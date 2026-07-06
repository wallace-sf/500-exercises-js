# #007 - Complexity Analysis (Pattern C)

Determine the time complexity (Big-O) of the function below as a function of n and justify it in 1-2 sentences.

```js
function analyze(n) {
  let c = 0;
  while (n > 1) { n = Math.floor(n / 2); c++; }
  return c;
}
```

**Constraints:** 1 <= n <= 10^9 (for analysis only)

**Example:** for n=8, the classification remains O(log n).

**Tags:** big-o, analysis

**Hint:** Count iterations and combine them.

**Bonus:** Write 3 basic tests to validate your function.

## Answer

_(write your analysis here: complexity + a 1-2 sentence justification)_
