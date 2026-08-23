Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:

203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

Not all numbers are happy. If we started with 11, the sequence would be:

11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.

Given a positive whole number, you have to determine whether that number is happy or unhappy.

Examples
happy(203) ➞ true

happy(11) ➞ false

happy(107) ➞ false

Notes
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
The only numbers passed to your function will be positive whole numbers.
You are given an array of 0s and 1s, like the one below:

[0, 1, 0, 0, 0, 1, 1, 1, 0, 1]

// The first element, a 0, and the last element, a 1 are both unhappy.
// The second element, a 1 is unhappy.
// The second-to-last element, a 0 is unhappy.
// All other numbers in this array are happy.
A 1 is unhappy if the digit to its left and the digit to its right are both 0s. A 0 is unhappy if the digit to its left and the digit to its right are both 1s. If a number has only one neighbor, it is unhappy if its only neighbor is different. Otherwise, a number is happy.

Write a function that takes in an array of 0s and 1s and outputs the portion of numbers which are happy. The total portion of numbers which are happy can be represented as:

portion of happy numbers = (happy 0s + happy 1s) / total numbers
In the example above, 0.6 is the number of happy numbers.

Examples
portionHappy([0, 1, 0, 1, 0]) ➞ 0

portionHappy([0, 1, 1, 0]) ➞ 0.5

portionHappy([0, 0, 0, 1, 1]) ➞ 1

portionHappy([1, 0, 0, 1, 1]) ➞ 0.8
Notes
Remember: a 0 border number is unhappy if its only neighbor is a 1 and vice versa.
An array will contain at least two elements.
