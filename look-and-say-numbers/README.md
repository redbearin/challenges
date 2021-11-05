Given an integer, return a new integer according to the rules below:

Split the number into groups of two digit numbers. If the number has an odd number of digits, return "invalid".
For each group of two digit numbers, concatenate the last digit to a new string the same number of times as the value of the first digit.
Return the result as an integer.
lookAndSay(3132) ➞ 111222

// By reading the number digit by digit, you get three "1" and three "2".
// Therefore, you put three ones and three two's together.
// Remember to return an integer.
Examples
lookAndSay(95) ➞ 555555555

lookAndSay(1213141516171819) ➞ 23456789

lookAndSay(120520) ➞ 200

lookAndSay(231) ➞ "invalid"

Notes
Note that the number 0 can be included (see example #3).
Check the Resources tab for a TED-Ed video for extra clarity.