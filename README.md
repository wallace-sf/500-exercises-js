# 500 Logic, DSA and Algorithm Exercises (JS/TS)

**English** | [Português (Brasil)](README.pt-BR.md)

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

To see a progress summary across all 500 exercises (theory and coding):

```bash
npm run summary
```

Prints a totals block (answered / correct / remaining) plus a table per exercise with two columns:

- **Respondido**: a valid-format attempt exists — the theory `## Answer` section is filled in, or the coding `solution.ts` body was edited away from the `not implemented` stub. Does not imply correctness.
- **Correto**: the attempt is actually correct — for theory exercises, the stated complexity matches `answer.json` (deterministic check only, no LLM call); for coding exercises, `Respondido` is true *and* `solution.test.ts` passes (this combination avoids false positives from a handful of auto-generated tests that only check that the function exists, without invoking it, and would otherwise pass on an untouched stub).

Progress is tracked locally in `scripts/progress.json` (gitignored, not committed) and only updated when this command runs.

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

## Daily practice routine (interview prep)

Think in **time per day**, not number of exercises. The count naturally varies with difficulty; what matters is consistency.

**1 to 1.5 hours a day, 5 to 6 days a week.** Within that time, the count adjusts itself:

| Difficulty | Exercises per day | Target time per exercise |
|---|---|---|
| Easy | 3 to 5 | 15 to 20 min |
| Medium | 1 to 2 | 30 to 45 min |
| Hard | 1 every 1 or 2 days | 45 to 60+ min |

The target times mirror a real interview (30 to 45 minutes per problem). Start without a timer while learning a topic, and use the targets once it feels comfortable.

### More important than the count

1. **Set a limit for being stuck.** After 25 to 30 minutes with no progress, read the hint. If it still doesn't click, read a solution, understand it, and **redo it on your own the next day**. Two hours stuck teaches little.
2. **Review.** Spend ~15 minutes a day redoing an exercise from 3 to 7 days ago, without looking at your answer. Retaining what you solved is worth more than solving something new.
3. **Think out loud.** In an interview, explaining your reasoning counts as much as getting it right. Filling in each exercise's `## Approach` section is good practice for this.
4. **State the complexity** (time and space) of every solution. It is always asked.
5. **Learn patterns, not exercises.** You don't need to solve all 500. You need to recognize the patterns (recursion, two pointers, sliding window, hash map, BFS/DFS, dynamic programming, etc.). Once a pattern feels easy, it's fine to skip some similar exercises.

### Timeline

At an average of 2 exercises a day, 5 days a week, all 500 would take about **a year**. With an interview date set, prioritize the most frequently asked topics instead of following the numeric order.
