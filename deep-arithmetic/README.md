Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

Examples
sum(["1", "five", "2wenty", "thr33"]) ➞ 36

sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

Notes
Numbers in strings can be negative, but will all be base-10 integers.
Negative numbers may directly follow another number.
The hyphen or minus character ("-") does not only occur in numbers.
Arrays may be ragged or empty.