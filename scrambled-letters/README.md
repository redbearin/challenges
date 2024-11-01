Write a function that receives an array of words and a mask. Return an array of words, sorted alphabetically, that match the given mask.

Examples
scrambled([”red”, “dee”, “cede”, “reed”, “creed”, “decree”], “*re**”) ➞ [“creed”]

scrambled([”red”, “dee”, “cede”, “reed”, “creed”, “decree”], “***”) ➞ [“dee”, “ree”]

Notes
The length of a mask will never exceed the length of the longest word in the word array.