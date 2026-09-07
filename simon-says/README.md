
Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

Examples
simonSays([1, 2], [5, 1]) ➞ true

simonSays([1, 2], [5, 5]) ➞ false

simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true

simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false

Notes
Both input arrays will be of the same length, and will have a minimum length of 2.
The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter.

=======
Simon asks you to perform operations on an array of numbers that only he tells you. You should ignore all other instructions given. Create a function which evaluates an array of commands (written in plain English) if the command begins with Simon says. Return the result as an integer.

Examples
simonSays([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
]) ➞ 10

simonSays([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
]) ➞ 24

simonSays([
  "Firstly, add 4",
  "Simeon says subtract 100"
]) ➞ 0
Notes
If no instructions are given by Simon, return 0.
For the sake of simplicity, there will be no command for dividing.

