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
npm run test:one -- 31              # by number
npm run test:one -- two-pointers    # by (partial) name
npm run test:one -- 31 --watch      # watch mode for that exercise
```

If more than one exercise matches the given number/name, be more specific.

To validate the discursive answers (theory exercises, `## Answer` sections) using Claude Code:

```bash
npm run test:theory                       # validate all answered theory exercises
npm run test:theory -- 2                  # validate only exercise 002
npm run test:theory -- --cli claude-personal   # use a different Claude Code binary
```

Unanswered exercises (still showing the placeholder text) are skipped. This calls the Claude CLI (`claude` by default) for each answered exercise, so it makes real API calls and takes a few seconds per exercise.

Each theory exercise folder has an `answer.json` (e.g. `exercises/001-complexity-analysis-pattern-b/answer.json`) with the expected complexity, used as the reference/ground truth when grading — it is not exposed in the `README.md` itself.

To see a progress summary of the theory exercises:

```bash
npm run theory:summary
```

Prints a totals block (answered / remaining) plus a table per exercise: whether it's answered, how many times the answer changed, and when it was last changed. Progress is tracked locally in `scripts/theory-progress.json` (gitignored, not committed) and only updated when this command runs.

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
