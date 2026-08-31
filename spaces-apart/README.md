Create a function that takes an arr and returns the sum of the numbers between two "1"s.

Examples
spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"

Notes
Return "invalid" if:
A negative number exists inside arr.
The number of "1"s does not equal 2.
Ignore any other string inside arr.
Note that "1" is not 1.