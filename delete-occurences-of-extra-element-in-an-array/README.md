Create a function that takes two arguments: an array arr and a number num. If an element occurs in arr more than num times, remove the extra occurrence(s) and return the result.

Examples
deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]

deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

deleteOccurrences([true, true, true], 3) ➞ [true, true, true]

Notes
Do not alter the order of the original array.