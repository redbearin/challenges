Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

Examples
wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"

wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1]) ➞ "test"

wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2]) ➞ "edabit"

Notes
The elements in the second array are indexes of the elements in the first array.