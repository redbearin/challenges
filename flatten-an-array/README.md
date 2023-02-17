Create a function that takes an array. This array can have all kinds of items, even other arrays. The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:

If the item is an Array, include each item in it and the following still apply:
If the item is a Function, include the function's output, not the function itself.
If the item is a plain Object or a Primitive, include it as is.
Examples
flattenArray([1, "2", [3, function () { return 4; }, [ "five" ], "six", true, { prop: "val" }]])
➞ [1, "2", 3, 4, "five", "six", true, { prop: "val" }]

flattenArray([1, 2, [3, [4, 5], 6], 7, 8]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]

flattenArray() ➞ []

Notes
If no input is given it should return an empty array: [].
