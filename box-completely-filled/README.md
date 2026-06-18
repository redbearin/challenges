completelyFilled([
  "#####",
  "#***#",
  "#***#",
  "#***#",
  "#####"
]) ➞ true

completelyFilled([
  "#####",
  "#* *#",
  "#***#",
  "#***#",
  "#####"
]) ➞ false

completelyFilled([
  "###",
  "#*#",
  "###"
]) ➞ true

completelyFilled([
  "##",
  "##"
]) ➞ true

Notes
Boxes of size n <= 2 are considered automatically filled (see example #4).
Empty space will always be a space character (" ").