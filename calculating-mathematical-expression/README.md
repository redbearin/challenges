Create a function that takes a mathematical expression as a string, array of numbers on which the mathematical expression is to be calculated and return the result as an array of string.

Explanation
mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]

// Math expression: "f(x)=x+1"
// Numbers to calculate expression = [1,2]
// f(1)=1+1=2
// f(2)=2+1=2
// Solution = ["f(1)=2","f(2)=3"]

Examples
mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]

mathematicalExp("f(x)=x^2",[1,2,3]) ➞ ["f(1)=1","f(2)=4","f(3)=9"]

mathematicalExp("f(x)=x*3",[1,2,3]) ➞ ["f(1)=3","f(2)=6","f(3)=9"]
Notes
Array of numbers are positive integers.