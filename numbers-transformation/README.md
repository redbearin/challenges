Mubashir (as always) needs your help to complete his assignment.

You are given two positive integers n and m. You have to perform some basic mathematical operations on n to obtain m. These are your options:

(n-1)/2   - if (n-1) is divisible by 2
n/2       - if n is divisible by 2
n*2
Create a function that returns the minimum number of steps required to transform n into m.

Examples
numberTransform(2, 8) ➞ 2
// 2 * 2 = 4
// 4 * 2 = 8

numberTransform(9, 2) ➞ 2
// (9-1) / 2 = 4
// 4 / 2 = 2

numberTransform(1024, 1024) ➞ 0
Notes
m will always be a power of 2.