Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

For example:

[2, 3, 4, 5] ➞ 30
(2 + 4) * 5 ➞ 30

[1, 4, 5, 6, 7, 2, 3] ➞ 48
(1 + 5 + 7 + 3) * 3 ➞ 48
Examples
evenLast([]) ➞ 0

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([-11, 3, 3, 1, 10]) ➞ 20

Notes
If the array is empty, return 0.