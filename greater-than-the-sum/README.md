For each number in an array, check if that number is greater than the sum of all numbers that appear before it in the array. If all numbers in the array pass this test, return true. Return false otherwise.

Examples
greaterThanSum([2, 3, 7, 13, 28]) ➞ true

// 3 > 2 = true
// 7 > 2 + 3 = true
// 13 > 2 + 3 + 7 = true
// 28 > 2 + 3 + 7 + 13 = true

greaterThanSum([1, 2, 4, 6, 13]) ➞ false

// 2 > 1 = true
// 4 > 1 + 2 = true
// 6 > 1 + 2 + 4 = false
// 13 > 1 + 2 + 4 + 6 = false

Notes
The first number in any array will always pass the test.