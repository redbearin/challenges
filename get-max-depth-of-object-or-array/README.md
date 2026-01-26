Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.

Examples
getDepth([]) ➞ 1

getDepth({ a: 1 }) ➞ 1

getDepth({ a: 1, b: { c: 1 } }) ➞ 2

getDepth([1, [2, [3, [4, [5]]]]]) ➞ 5

Notes
An empty object / array counts as a depth of 1.