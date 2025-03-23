Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true

allTruthy(true, false, true) ➞ false

allTruthy(5, 4, 3, 2, 1, 0) ➞ false

Notes
Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
You will always be supplied with at least one parameter.