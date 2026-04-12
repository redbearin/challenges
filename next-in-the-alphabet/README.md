Create a function which returns the next letters alphabetically in a given string. If the last letter is a "Z", change the rest of the letters accordingly.

Examples
nextLetters("A") ➞ "B"

nextLetters("ABC") ➞ "ABD"

nextLetters("Z") ➞ "AA"

nextLetters("CAZ") ➞ "CBA"

nextLetters("") ➞ "A"

Notes
Tests will all be in CAPITALS.
Empty inputs should return a capital "A" (as if it were in letter position 0!).
Think about the letter "Z" like the number 9 and how it carries over to increment the next letter/digit over.