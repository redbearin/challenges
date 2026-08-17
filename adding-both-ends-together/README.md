Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:

The first and last digits of a number must add to 10.
Examples
endsAddTo10([19, 46, 2098]) ➞ 3

endsAddTo10([33, 44, -55]) ➞ 1

endsAddTo10([]) ➞ 0

Notes
All items in the array will be numbers.
Ignore negative signs (see example #2).
If the number contains only one digit, that digit will be the first and the last digit.
If given an empty array, return 0.