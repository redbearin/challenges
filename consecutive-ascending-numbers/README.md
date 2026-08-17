Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, return false.

Examples
ascending("123124125") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 3's : 123, 124, 125

ascending("101112131415") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 2's : 10, 11, 12, 13, 14, 15

ascending("32332432536") ➞ false
// Regardless of the grouping size, the numbers can't be consecutive.

ascending("326325324323") ➞ false
// Though the numbers (if grouped into 3's) are consecutive but descending.

ascending("666667") ➞ true
// Consecutive numbers: 666 and 667.

Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
A recursive version of this challenge can be found via this link.