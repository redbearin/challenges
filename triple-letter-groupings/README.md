Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

Worked Example
threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!
Examples
threeLetterCollection("slap") ➞ ["lap", "sla"]

threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

threeLetterCollection("cat") ➞ ["cat"]

threeLetterCollection("hi") ➞ []

Notes
Return an empty array if given a word with less than 3 letters.