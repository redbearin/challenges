Write a function that returns the number of distinct items inside a box. Do not count items outside the box.

There are four boundaries for a box and those boundaries start with a "#" and end with a "#". Look for horizontal and vertical consecutive hashes.

Examples
count([
  "??????",
  "?####?",
  "?#&!#?",
  "@#^Z#?",
  "$####?"
]) ➞ 4

count([
  "??????",
  "?####?",
  "?#ZZ#?",
  "@#ZZ#?",
  "$####?",
  "AAAAAA"
]) ➞ 1

count([
  "AAAAA",
  "AAA##",
  "AAA##",
  "AAAAA",
  "AAAAA"
]) ➞ 0

Notes
Return 0 if the box is empty or too small to fit anything.