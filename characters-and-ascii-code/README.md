Write a function that transforms an array of characters into an array of objects, where:

The keys are the characters themselves.
The values are the ASCII codes of those characters.
Examples
toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]

toObj(["z"]) ➞ [{z: 122}]

toObj([]) ➞ []

Notes
N/A