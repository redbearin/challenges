Create a function that takes an empty function as a string and returns the function as a arrow function.

Examples
"function test(a) {}" ➞  "const test = (a) =>"

"function twoArgs(a,b) {}" ➞ "const twoArgs = (a,b) =>"

"function restArgs(...a) {}" ➞  "const restArgs = (...a) =>"

Notes
Functions can have multiple arguments.
The arrow function must be assigned to a const.