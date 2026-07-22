# #001 - Complexity Analysis (Pattern B)

Determine the time complexity (Big-O) of the function below as a function of n and justify it in 1-2 sentences.

```js
function analyze(n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) s += i * j;
  }
  return s;
}
```

**Constraints:** 1 <= n <= 10^9 (for analysis only)

**Example:** for n=8, the classification remains O(n^2).

**Tags:** big-o, analysis

**Hint:** Count iterations and combine them.

**Bonus:** Don't use nested loops (aim for O(n) or O(n log n)).

## Answer

O(n^2)

Explanation:

The function runs with nested iterations, making time complexity O(n²). For every single result iteration the indexes are multiplied and added up in s variable.
