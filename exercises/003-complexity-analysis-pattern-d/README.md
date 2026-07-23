# #003 - Complexity Analysis (Pattern D)

Determine the time complexity (Big-O) of the function below as a function of n and justify it in 1-2 sentences.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) s += i;
  return s;
}
```

**Constraints:** 1 <= n <= 10^9 (for analysis only)

**Tags:** big-o, analysis

**Hint:** Count iterations and combine them.

**Bonus:** Implement an iterative version (no recursion).

## Answer

_(write your analysis here: complexity + a 1-2 sentence justification)_
