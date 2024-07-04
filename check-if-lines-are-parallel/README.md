Given two lines, determine whether or not they are parallel.

Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.

Examples
linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
// x+2y=3 and x+2y=4 are parallel.

linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
// 2x+4y=1 and 4x+2y=1 are not parallel.

linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
// Lines are parallel to themselves.

Notes
Two lines are parallels if they have the same slope. If the slopes are different, the lines are not parallel.
All test cases use valid input (no lists of the wrong size, for example).
All coefficients will be integers (whole numbers).