For this task, you will write two validators.

Shift Validator: When each element is translated (added or subtracted) by a constant.
Multiple Validator: When each element is multiplied (by a positive or negative number) by a constant.
A few examples to illustrate these respective functions:

Examples
isShifted([1, 2, 3], [2, 3, 4]) ➞ true
// Each element is shifted +1

isShifted([1, 2, 3], [-9, -8, -7]) ➞ true
// Each element is shifted -10

isMultiplied([1, 2, 3], [10, 20, 30]) ➞ true
// Each element is multiplied by 10

isMultiplied([1, 2, 3], [-0.5, -1, -1.5]) ➞ true
// Each element is multiplied by -1/2

isMultiplied([1, 2, 3], [0, 0, 0]) ➞ true
// Each element is multiplied by 0

Notes
The given arrays are the same length.
Keep in mind one special case: if the second array is an array of only zeroes, then the first array can be anything (the multiplier will be 0).