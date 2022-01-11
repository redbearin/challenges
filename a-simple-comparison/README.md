Mubashir needs your help to compare two arrays.

First array arr1 contains some numbers and second array arr2 contains squared values of numbers given in the first array.

Create a function which takes these two arrays and returns true if all square values are available, false otherwise.

arr1 = [121, 144, 19, 161, 19, 144, 19, 11]  
arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
Returns true because 121 is square of 11, 14641 is square of 121, 20736 is square of 144, 361 is square of 19, 25921 the square of 161, and so on...

arr1 = [121, 144, 19, 161, 19, 144, 19, 11] 
arr2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Examples
simpleComp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) ➞ true

simpleComp([4, 4], [1, 31]) ➞ false

simpleComp([2, 2, 3], [4, 4, 9]) ➞ true