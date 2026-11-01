# #016 - Recursion: Binary Search

Given an array of distinct integers sorted in ascending order and a target, return the index of target in the array, or -1 if it is not present. Implement it recursively.

**Signature:** `function binarySearch(arr, target) {}`

**Constraints:** 0 <= arr.length <= 10^5; -10^9 <= arr[i], target <= 10^9

**Examples:**

```txt
binarySearch([1, 3, 5, 7, 9], 7)->3
binarySearch([1, 3, 5, 7, 9], 4)->-1
```

**Tags:** recursion, binary search

**Hint:** Look at the middle element: it tells you which half can still contain the target.

**Bonus:** Don't create sub-arrays (no slice): pass the search boundaries instead, so each call is O(1).

## Approach

_(to be filled in while solving)_
