The sliding window is a technique used to simplify complex data problems. A window that slides over the data to examine different sections of it.

Your challenge is to create a sliding window that traverses the array and returns the maximum value in each window.

Arguments
Array:The array over which you are traversing.
windowLength: The length of the window you will be using to do the search.
Returns Array: A new array containing the maximums for each window.
You are given this array and a window length of 2.
[4, 5, 6, 7, 8, 9]
Our function would start by examining the first two elements of the array and pushes the max value to a new array.

[**4, 5,** 6, 7, 8, 9]
... then the window slides to examine the next two, in this case 5 and 6, and pushes the max value to the array.

[4, **5, 6**, 7, 8, 9]
The window will examine the entire length of the array until the maximums for each window have been added to the new array.

Examples
windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3) ➞ [3, 4, 4, 4, 3, 2, 5]