In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns.

Matrix A:

[
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]
In mathematics, a square matrix is a matrix with the same number of rows and columns.

In linear algebra, the trace of a square matrix A is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A (tr(A) = 6).

Task
Create a function that takes a 2D array as an argument and returns a number (trace) for a square matrix and a zero otherwise.

Examples
getTrace([
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 6

getTrace([
  [0, 1, 0, 0],
  [1, -1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 4

Notes
N/A