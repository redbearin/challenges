Create a function that determines if there is an upward trend.

Examples
upwardTrend([1, 2, 3, 4]) ➞ true

upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"

upwardTrend([1, 2, 3, 6, 7]) ➞ true

Notes
If there is a string element in the array, return "Strings not permitted!".
The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).