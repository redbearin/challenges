Mubashir needs your help to find the Simple Numbers in a given range.

A number X, that has an N amount of digits (which we'll enumerate as d1, d2, ..., dN), is Simple if the following equation holds true:

X = d1^1 + d2^2 + ... + dN^N
Examples of Simple Numbers:
89 = 8^1 + 9^2

135 = 1^1 + 3^2 + 5^3

Create a function that returns an array of all the Simple Numbers that exist within a given range between a and b (both numbers are inclusive).

Generate an array with the numbers from a to b.
Filter the array so that only "simple numbers" are kept.
To find out if a number is "simple":
Generate an array of the individual digits of the number.
For each digit, calculate digit ^ (indexOfTheDigit + 1).
Sum the results of the calculations above and compare with the original number. If they're equal, the number is "simple".
Examples
simpleNumbers(1, 10) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9]

simpleNumbers(1, 100) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

simpleNumbers(90, 100) ➞ []

Notes
N/A