You will be given a string of characters containing only the following characters: ():

Create a function that returns a number based on the number of sad and smiley faces there are.

The happy faces :) and (: are worth 1.
The sad faces :( and ): are worth -1.
Working Example
happinessNumber(":):(") ➞ -1
// The first 2 characters are :)        +1      Total: 1
// The next 2 are ):                    -1      Total: 0
// The last 2 are :(                    -1       Total: -1
Examples
happinessNumber(":):(") ➞ -1

happinessNumber("(:)") ➞ 2

happinessNumber("::::") ➞ 0

Notes
All test cases will be valid.