Given a string text. Write a function that returns the character with the highest frequency. If more than 1 character has the same highest frequency, return all those characters as an array. If there is no repetition in characters, return "No Repetition".

Examples
maxOccur("Computer Science") ➞ ['e']

maxOccur("Edabit") ➞ "No Repetition"

maxOccur("system admin") ➞ ['m', 's']

maxOccur("the quick brown fox jumps over the lazy dog") ➞ [' ']
Notes
Try to make use of the concept used in counting sort.