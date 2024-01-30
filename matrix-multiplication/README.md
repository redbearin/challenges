The main condition of matrix multiplication is that the number of columns of the 1st matrix must equal to the number of rows of the 2nd one.

As a result of multiplication you will get a new matrix that has the same quantity of rows as the 1st one has and the same quantity of columns as the 2nd one.

For example if you multiply a matrix of "n" * "k" by "k" * "m" size you"ll get a new one of "n" * "m" dimensions.

Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A*B.

If the number of columns of the 1st matrix isn't equal to the number of rows of the 2nd: return "ERROR".
Or the number of rows of the 1st matrix isn't equal to the number of columns of the 2nd: return "ERROR".

Examples
mul([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [30, 36, 42],
  [66, 81, 96],
  [102, 126, 150]
]