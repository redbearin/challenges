Given a number, insert duplicate digits on both sides of all digits which appear in a group of 1.

Worked Example
numbersNeedFriendsToo(22733) ➞ 2277733

// The number can be split into groups 22, 7, and 33.
// 7 appears on its own.
// Put 7s on both sides to create 777.
// Put the numbers together and return the result.

Examples
numbersNeedFriendsToo(123) ➞ 111222333

numbersNeedFriendsToo(56657) ➞ 55566555777

numbersNeedFriendsToo(33) ➞ 33

Notes
All tests will include positive integers.