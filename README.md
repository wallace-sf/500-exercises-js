# 500 Logic, DSA and Algorithm Exercises (JS/TS)

A local, minimalist environment to practice the 500 exercises from the "500 Logic, DSA and Algorithm Exercises" list, in JavaScript/TypeScript, with Vitest.

No UI, no database, no ranking, no mandatory timer. Just a simple way to write a solution and know right away whether it passed or not.

## How to run

```bash
npm install
npm test          # runs all tests once
npm run test:watch   # watch mode, ideal while solving an exercise
```

To run a single exercise:

```bash
npx vitest run exercises/031-two-pointers-remove-duplicates-in-place
```

## Structure

```
exercises/
  001-complexity-analysis-pattern-b/
    README.md
  031-two-pointers-remove-duplicates-in-place/
    README.md
    solution.ts
    solution.test.ts
  ...
```

Each folder is one exercise, numbered from 001 to 500.

- **Theory exercises** (10 in total, Big-O analysis only): have just a `README.md`, with an `## Answer` section to fill in by writing.
- **Coding exercises** (490 in total): have a `README.md` (problem statement, constraints, examples, tags, hint, bonus), `solution.ts` (signature ready, empty body throwing `not implemented`) and `solution.test.ts` (tests with the examples from the statement plus, in ~2/3 of the cases, extra edge cases verified against the reference solution — empty array, single element, duplicates, etc.).

Solving an exercise = implementing the body of the function/class in `solution.ts` until the tests pass.

## Section map

| Section | Exercises | Count |
|---|---|---|
| Fundamentals (Big-O, basic recursion, math) | 001–030 | 30 |
| Arrays and Strings (two pointers, sliding window, prefix sum, hashmap, sorting) | 031–165 | 135 |
| Stacks, Queues and Lists | 166–210 | 45 |
| Trees, Heaps and Tries | 211–240 | 30 |
| Graphs and Union-Find | 241–300 | 60 |
| Backtracking | 301–340 | 40 |
| Dynamic Programming | 341–480 | 140 |
| Intervals, Bits and Misc | 481–500 | 20 |

## Suggested attack order

1. Fundamentals
2. Arrays and Strings
3. Stacks, Queues and Lists
4. Trees and Tries
5. Graphs and Union-Find
6. Backtracking
7. Dynamic Programming
8. Intervals, Bits and Misc (can be interleaved at any time — they are short)

No rush, no timer at the beginning. One exercise at a time.
