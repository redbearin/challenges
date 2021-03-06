The goal is to test if a consecutive sequence is formed. A consecutive sequence is defined as sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). The twist is that you have to consider the combination of arrays as shown.

[3 5 1 -5 ]  =>  [3+4  5+3  1+8  15-5]  =  [7 8 9 10]  =>  true
[4 3 8 15]
Also important is that the arrays can be of different sizes, where excess numbers on the larger one will be paired with 0s from the other ones.

[2 2 2  ]  =>  [2+5  2+6  2+7  10+0]  = [ 7 8 9 10]  =>  true
[5 6 7 10]

Examples:
hasConsecutiveSeries([1, 2, 3], [1, 1, 1]) => true
hasConsecutiveSeries([1, 2, 3], [1, 2, 1]) => false
hasConsecutiveSeries([4, 6, -5, 8, 4], [-2, -3, 9, -3, 2] => true
hasConsecutiveSeries([12, 3], [0, 10, 14, 15, 16]) => true

Notes:
Each array has at least two elements.
