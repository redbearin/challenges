A square matrix (same number of rows as columns) is called row diagonally dominant if "the absolute value of each entry in the main diagonal is strictly larger than the sum of the absolute values of the other entries in that row".

To illustrate ...

[
  [10, 3, 6],
  [2, -9, -6],
  [1, -1, 4]
]
The absolute values from top left to bottom right are:

10 = First item of first row.
9 = Second item of second row.
4 = Third item of third row.
... making a row diagonal dominant total of 23.

In the first row ...

The value of the row diagonal dominant is 10.
The sum of the other absolute values are 3 and 6 make a total of 9.
... so far, the matrix is row diagonally dominant, since 10 > 9.

In the second row ...

The value of the row diagonal dominant is 9.
The sum of the other absolute values in the second row are 3 and 6 which make a total of 9.
... meaning the matrix is not row diagonally dominant since 9 <= 9.

[
  [10, 3, 6],
  [3, -9, -6],
  [1, -1,  4]
]
For a square to be row diagonally dominant, all of the rows in the square have to be like Row 1.

Write a function that determines if a given square matrix is row diagonally dominant.

Examples
diagDom([
  [2, -1],
  [-1, 2]
]) ➞ true

diagDom([
  [0, 1],
  [1, 0]
]) ➞ false

diagDom([
  [10, 3, 6],
  [2, -9, -6],
  [1, -1, 4]
]) ➞ true

diagDom([
  [10, 3, 6],
  [4, -9, -6],
  [1, -1, 4]
]) ➞ false

Notes
As in the examples, the size of the matrices will change, but they will always be square.