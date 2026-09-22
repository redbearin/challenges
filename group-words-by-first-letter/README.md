Write a function that takes an array of words and groups them by their first letter.

const groupByFirstLetter = words => {
  // your solution
};

Example:

groupByFirstLetter([
  "apple",
  "banana",
  "avocado",
  "blueberry",
  "cherry",
  "apricot"
]);

Should return:

{
  a: ["apple", "avocado", "apricot"],
  b: ["banana", "blueberry"],
  c: ["cherry"]
}

A few explicit requirements:

Words may contain uppercase letters, but grouping is case-insensitive.
Keep the original word unchanged in the resulting array.
Preserve the original order of the words within each group.
Empty strings should be ignored.
Assume every non-empty value is a string.
Don't modify the input array.

For example:

groupByFirstLetter(["Apple", "ant", "", "Banana", "BLUE"]);

should produce:

{
  a: ["Apple", "ant"],
  b: ["Banana", "BLUE"]
}

Aim for O(n) time.

There's no obscure trick here. I'm interested in how you structure the accumulation without making the code more complicated than the problem requires.