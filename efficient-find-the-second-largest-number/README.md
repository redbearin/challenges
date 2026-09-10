Write a function called secondLargest that takes an array of numbers and returns the second largest unique number.

secondLargest([10, 5, 8, 20, 15]); // 15
secondLargest([3, 1, 2]);           // 2
secondLargest([5, 5, 4, 3]);        // 4
secondLargest([-10, -5, -20]);      // -10

If there isn't a second unique number, return null.

Solve it in one loop without Set, Math.max, or splice.