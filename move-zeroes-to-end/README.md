Write a function moveZeros that moves all 0s to the end of an array, while keeping the other numbers in their original order.

const moveZeros = (nums) => {
  // your code
};

Examples:

moveZeros([0, 1, 0, 3, 12]);
// [1, 3, 12, 0, 0]

moveZeros([1, 2, 3]);
// [1, 2, 3]

moveZeros([0, 0, 1]);
// [1, 0, 0]

moveZeros([4, 0, 5, 0, 0, 2]);
// [4, 5, 2, 0, 0, 0]

Rules: Don't use .sort(), and try to solve it in O(n) time.

Bonus: First solve it by creating a new array. Then see if you can solve it in place, modifying the original array without creating another array.

