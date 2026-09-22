Write a function that returns every value that appears more than once in an array.

const findDuplicates = values => {
  // your solution
};

For example:

findDuplicates([1, 2, 3, 2, 4, 1, 5]);
// [2, 1]

findDuplicates(["a", "b", "a", "c", "b", "b"]);
// ["a", "b"]

findDuplicates([1, 2, 3, 4]);
// []

findDuplicates([]);
// []

Here are the exact requirements:

Values can be strings or numbers.
Each duplicate should appear only once in the result.
A value becomes a duplicate when you encounter it for the second time. Preserve that order.
Additional occurrences after the second should not affect the result.
Do not modify the input.
Aim for O(n) time.

That third requirement is important. For example:

findDuplicates(["a", "b", "b", "a"]);

should return:

["b", "a"]

because "b" reaches its second occurrence before "a" does.

There are a couple of clean approaches here. See what you come up with.