An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

Clarification
[1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
[1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
[1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
[1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]
Examples
arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]

arrEleSum([1, 2]) ➞ [2, 1]

arrEleSum([1, 2, 3]) ➞ [5, 4, 3]

arrEleSum([1, 2, 3, 4, 5]) ➞ [14, 13, 12, 11, 10]

arrEleSum([10, 20, 30, 40, 50, 60]) ➞ [200, 190, 180, 170, 160, 150]

Notes
N/A