Create two functions:

Leftside function: Returns count of numbers strictly smaller than n on the left.
Rightside function: Returns count of numbers strictly smaller than n on the right.
Examples
leftSide([5, 2, 1, 4, 8, 7]) ➞ [0, 0, 0, 2, 4, 4]

rightSide([5, 2, 1, 4, 8, 7]) ➞ [3, 1, 0, 0, 1, 0]

leftSide([1, 2, 3, -1]) ➞ [0, 1, 2, 0]

rightSide([1, 2, 3, -1]) ➞ [1, 1, 1, 0]

Notes
"Left" and "right" refer to the number at indices less than or greater than n's index, respectively.