Create a function that takes an array of numbers and returns the product of the largest and second largest UNIQUE numbers in the array. So, if there are multiple of the same highest integer, only count one towards the highest product -- see the examples below for more.

Examples
product([2, 3, 1, -1, 2]) ➞ 6
// 2 * 3 = 6

product([-2, -2, -1, -1]) ➞ 2
// -2 * - 1 = 2
// Not 1, because you can only use -1 one time.

product([8, 8, 8]) ➞ 64
// 8 * 8 = 64
// You can repeat here because there is only one value.

product([2, 8, 8, 8]) ➞ 16
// 2 * 8 = 16
// Not 64, because you can only use 8 one time.

Notes
Numbers in the array are all integers.
Numbers can be both positive or negative.