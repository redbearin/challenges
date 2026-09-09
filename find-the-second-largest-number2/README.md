Write a function called secondLargest that takes an array of numbers and returns the second largest unique number.

secondLargest([10, 5, 8, 20, 15]); // 15
secondLargest([3, 1, 2]);           // 2
secondLargest([5, 5, 4, 3]);        // 4
secondLargest([-10, -5, -20]);      // -10

If there isn't a second unique number, return null:

secondLargest([7, 7, 7]); // null
secondLargest([5]);       // null

The catch: Try to solve it without using .sort().

You'll probably need a loop, some comparisons, and a way to keep track of the largest and second-largest values you've seen.

This one has a few sneaky edge cases. Send me your solution when you're done and I'll test it for you.