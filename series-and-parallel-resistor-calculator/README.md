Create a function that takes an array of resistors and calculates the output of total resistance if the circuit is connected in parallel or in series.

Examples
resistanceCalculator([10, 20, 30, 40, 50]) ➞ [4.38, 150]

resistanceCalculator([25, 14, 65, 18]) ➞ [5.48, 122]

resistanceCalculator([10, 10]) ➞ [5, 20]

resistanceCalculator([0, 0, 0, 0]) ➞ [0, 0]

resistanceCalculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]) ➞ [0.44, 22.6]

Notes
Return parallel resistance as the first element and series resistance as second element of the array.
Round up the total resistance to two decimal places.