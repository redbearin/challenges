Rondo Form is a type of musical structure, in which there is a recurring theme/refrain, notated as A. Here are the rules for valid rondo forms:

Rondo forms always start and end with an A section.
In between the A sections, there should be contrasting sections notated as B, then C, then D, etc... No letter should be skipped.
There shouldn't be any repeats in the sequence (such as ABBACCA).
Create a function which validates whether a given string is a valid Rondo Form.

Examples
validRondo("ABACADAEAFAGAHAIAJA") ➞ true

validRondo("ABA") ➞ true

validRondo("ABBACCA") ➞ false

validRondo("ACAC") ➞ false

validRondo("A") ➞ false

Notes
Inputs will be given as all uppercase.
For the purposes of this challenge, accept ABA as valid Rondo forms.