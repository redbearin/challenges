Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:

diagonal 1 = from upper-left to lower-right corner
diagonal 2 = from upper-right to lower-left corner
Examples
getDiagonals([ [1, 2], [3, 4] ]) ➞ [ [1, 4], [2, 3] ]

getDiagonals([ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ]) ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]

getDiagonals([ [true] ]) ➞ [ [true], [true] ]

Notes
Your function must also work with single elements or empty arrays.
Try to build both diagonals with a single loop.