Suppose a swimming pool blueprint can be represented as a 2D array, where 1s represent the pool and 0s represent the rest of the backyard.

[[0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]]
// Legitimate
Suppose a pool is considered legitimate if it does not touch any of the four borders in this 2D array.

[[1, 1, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]]
// Illegitimate! 
// The 1s are touching both the left "fence" and the upper "fence".
Create a function that returns true if the pool plan is legitimate, and false otherwise.

Examples
isLegitimate([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]) ➞ true

isLegitimate([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0]
]) ➞ false

isLegitimate([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ true

Notes
N/A