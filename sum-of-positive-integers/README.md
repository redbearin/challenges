Create a function that takes a string containing integers as well as other characters and return the sum of the positive integers only.

Examples
positiveSum("-12#-33 13%14&-11") ➞ 27
// 13 + 14 = 27

positiveSum("22 13%14&-11-22 13 12 0") ➞ 74
// 22 + 13 + 14 + 13 + 12 = 74

positiveSum("0 12 12 2") ➞ 26

Notes
There is at least one positive integer.
Each integer is separated by a space, #, %, &, etc.