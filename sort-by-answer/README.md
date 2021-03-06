Given an array of math expressions, create a function which sorts the array by their answer. It should be sorted in ascending order.

Examples
sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]) ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"]

sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]) ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]

sortByAnswer(["2 + 2", "2 - 2", "2 * 1"]) ➞ ["2 - 2", "2 * 1", "2 + 2"]

Notes
If multiple expressions have the same answer, put them in the order of which they appear (see example #2).
You won't need to worry about divisions by zero.
The symbol used for multiplication is x instead of *.