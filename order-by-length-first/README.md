Graded lexicographic order (grlex order for short) is a way of ordering words that:

First orders words by length.
Then orders words of the same size by their dictionary order.
For example, in grlex order:

"tray" < "trapped" since "tray" has length 4 while "trapped" has length 7.
"trap" < "tray" since both have length 4, but "trap" comes before "tray" in the dictionary.
Given an array of words, return that array in grlex order.

Examples
makeGrlex(["small", "big"]) ➞ ["big", "small"]

makeGrlex(["cat", "ran", "for", "the", "rat"]) ➞ ["cat", "for", "ran", "rat", "the"]

makeGrlex(["this", "is", "a", "small", "test"]) ➞ ["a", "is", "test", "this", "small"]

Notes
N/A