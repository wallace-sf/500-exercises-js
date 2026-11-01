# #020 - Recursion: Tower of Hanoi

There are n discs of different sizes stacked on peg from (largest at the bottom). Move them all to peg to, using peg via as auxiliary, following the rules: move one disc at a time, and never place a larger disc on top of a smaller one. Return the list of moves, in order, with the minimum number of moves. Each move is a pair [fromPeg, toPeg].

**Signature:** `function hanoi(n, from, to, via) {}`

**Constraints:** 0 <= n <= 20; pegs are named with single-character strings

**Examples:**

```txt
hanoi(1, 'A', 'C', 'B')->[['A', 'C']]
hanoi(2, 'A', 'C', 'B')->[['A', 'B'], ['A', 'C'], ['B', 'C']]
```

**Tags:** recursion

**Hint:** To move the largest disc, all the others must be somewhere else first.

**Bonus:** Prove that the minimum number of moves is 2^n - 1.

## Approach

_(to be filled in while solving)_
