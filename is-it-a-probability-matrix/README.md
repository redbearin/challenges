In probability theory, a probability matrix is a matrix such that:

The matrix is a square matrix (same number of rows as columns).
All entries are probabilities, i.e. numbers between 0 and 1.
All rows add up to 1.
The following is an example of a probability matrix:

[
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]
Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.

Write a function that determines if a matrix is a probability matrix or not.

Examples
isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3],
  [0.1, 0.2, 0.7]
]) ➞ true

isProbMatrix([
  [0.5, 0.5, 0.0],
  [0.2, 0.5, 0.3]
]) ➞ false

// Not a square matrix.

isProbMatrix([
  [2, -1],
  [-1, 2]
]) ➞ false

// Entries not between 0 and 1.

isProbMatrix([
  [0, 1],
  [1, 0]
]) ➞ true

isProbMatrix([
  [0.5, 0.4],
  [0.5, 0.6]
]) ➞ false

// Rows do not add to 1.

Notes
Fun fact: for most probability matrices M (for example, if M has no zero entries), the matrix powers M^n converge (as n increases) to a matrix where all rows are identical.