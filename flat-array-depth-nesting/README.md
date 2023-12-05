Create a function that can nest a flat array to represent an incremental depth level sequence.

Examples
incrementalDepth([1, 2]) ➞ [1, [2]]

incrementalDepth([1, 2, 3, 4, 5]) ➞ [1, [2, [3, [4, [5]]]]]

incrementalDepth([1, 3, 2, 6]) ➞ [1, [3, [2, [6]]]]

incrementalDepth(["dog", "cat", "cow"]) ➞ ["dog", ["cat", ["cow"]]]

Notes
The elements do not matter to the function, you should increment by index.
Expect the array length to be from 2-20.