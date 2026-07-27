Create a function that takes a string str and performs simple encoding as per the following method:

Replace all single occurrence characters with [
Replace all characters with two or more occurrences with ]
Return the final string after modification.

Examples
simpleEncoder("Mubashir") ➞ "[[[[[[[["
// '[' for each character

simpleEncoder("Matt") ➞ "[[]]"
// ']' for both 't'

simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// Two spaces in between

Notes
Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
Spaces are also characters.