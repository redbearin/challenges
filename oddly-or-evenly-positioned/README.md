Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).

Examples
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// 4 & 8 occupy the 2nd & 4th positions

charAtPos("EDABIT", "odd") ➞ "EAI"
// "E", "A" and "I" occupy the 1st, 3rd and 5th positions

charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]

Notes
Arrays are zero-indexed, so, index+1 = position or position-1 = index.
There will not be an empty string or an empty array.
A slightly different version of this challenge can be found here.
A recursive version of this challenge can be found here.