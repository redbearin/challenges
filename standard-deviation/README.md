The central tendency measures (mean, mode and median) sometimes aren't enough descriptives in a data set analysis. For example, given two arrays A=[15, 15, 15, 14, 16] and B=[2, 7, 14, 22, 30] the mean is μ=15 in both cases, however the values of second array are clearly more spread out from the average value. The standard deviation (also called sigma, the greek lowercase letter σ) measures the spread of the values in a data set and transform the "clearly more spread out than" assertion in a proofed statistical assertion. You can find more information in the Resources tab.

The standard deviation is calculated following five steps:

Obtain the mean of the data set.
For each value in the set calculate the absolute difference between the value and the mean.
Square each value obtained and sum them cumulatively.
Divide the result by the data set length.
Get the square root of the value obtained.
Given an array of values return the standard deviation rounded to the nearest hundredth.

Examples
standardDeviation([3, 5, 7]) ➞ 1.63
// |(3-5)|+|(5-5)|+|(7-5)| = 2² + 0 + 2² = 8 / 3 = square root of 2.66 = 1.63

standardDevition([5, 5, 5]) ➞ 0
// Values aren't deviating from the mean.

standardDeviation([-3, -5, -7]) ➞ 1.63
// Remember: absolute differences!

Notes
All given arrays are valid, no exceptions to handle.
Arrays can contain either positive or negative integers.
Remember to round to the nearest hundredth at the end.