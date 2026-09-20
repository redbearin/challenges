Write a function that takes two arrays and returns the unique values that appear in both arrays, preserving the order in which they first appear in the first array.

const commonValues = (arr1, arr2) => {
  // your solution
};

Examples:

commonValues([1, 2, 3, 4], [3, 4, 5, 6]);
// [3, 4]

commonValues([4, 2, 4, 1, 3, 2], [2, 4, 8]);
// [4, 2]

commonValues(["a", "b", "c"], ["c", "a", "d"]);
// ["a", "c"]

commonValues([1, 2, 3], [4, 5, 6]);
// []

commonValues([], [1, 2, 3]);
// []

To be specific about the requirements this time:

Values may be numbers or strings.
Each matching value should appear only once in the result.
Preserve its first-occurrence order from arr1.
You can assume primitive values only—no objects or arrays.
Do not modify either input array.

The obvious solution is fairly easy. The interesting part is getting it down to O(n + m) time while keeping the code readable.