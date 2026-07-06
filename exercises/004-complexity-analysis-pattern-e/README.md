# #004 - Complexity Analysis (Pattern E)

Determine the time complexity (Big-O) of the function below as a function of n and justify it in 1-2 sentences.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j = Math.max(j + 1, j * 2)) s++;
  }
  return s;
}
```

**Constraints:** 1 <= n <= 10^9 (for analysis only)

**Example:** for n=8, the classification remains O(n log n).

**Tags:** big-o, analysis

**Hint:** Count iterations and combine them.

**Bonus:** Handle empty inputs and negative values correctly.

## Answer

_(write your analysis here: complexity + a 1-2 sentence justification)_
