Given an array of numbers, return the first number that appears twice:

firstDuplicate([2, 1, 3, 5, 3, 2]);
// 3

firstDuplicate([1, 2, 3, 4, 2]);
// 2

firstDuplicate([1, 2, 3]);
// -1

The important detail is first to appear twice while reading left-to-right, not the duplicate whose first occurrence comes earliest.

Try to solve it in O(n) time.