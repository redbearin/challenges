Given an number, return a string which contains varying amounts of the word 'MEGA' depending on the given number's order of magnitude.

If the number is less than 100, return "not a mega milestone".
Otherwise, start with the string "MEGA milestone".
For every order of magnitude over 100 that the number is, add the word "MEGA" to the start of the string.
See the examples below for further clarification!

Examples
howMuchMega(54) ➞ "not a mega milestone"

howMuchMega(143) ➞ "MEGA milestone"

howMuchMega(1000) ➞ "MEGA MEGA milestone"

howMuchMega(9999.9) ➞ "MEGA MEGA milestone"

howMuchMega(10000) ➞ "MEGA MEGA MEGA milestone"

Notes
Large negative numbers can also be considered as MEGA, so use the absolute values.
You can expect decimal numbers as well as whole numbers.