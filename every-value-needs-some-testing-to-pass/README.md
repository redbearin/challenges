In this challenge, you have to verify that every, or some, of the given variables, pass a given test condition. There are seven parameters:

test A string being the condition to verify.
type A string with two possible values:
everybody if every variable has to pass the test;
somebody if at least one of the variables has to pass the test.
a, b, c, d, e The variables being integers or booleans.
Create a function that returns true or false, depending on the result of the test applied to the variables.

Examples
everySome(">= 1", "everybody", 1, 1, -1, 1, 1) ➞ false
// Is every variable >= 1?

everySome(">= 1", "somebody", -1, -1, -1, -1, 1) ➞ true
// Is some variable >= 1?

everySome("< 4 / 2", "everybody", 1, 2, 1, 2, 1, 0, -10) ➞ false
// Is every variable < 2?

Notes
N/A