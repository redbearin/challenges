asteroidCollision = nums => {
  // initialize len to get into while 
  // loop first time
  let len = nums.length - 1;
  // stay in loop as long as there are 
  // collisions
  while (nums.length !== len) {
    // only one element or no elements
    if(nums.length < 2)
      break;
    // go element by element thru array
    for (let i = 0; i < nums.length - 1; i++) {
      len = nums.length;
      // collision -- number to right is negative,
      // number to left is positive
      if (nums[i] > 0 && nums[i+1] < 0) {
        // left has larger size
        if (Math.abs(nums[i]) > Math.abs(nums[i + 1])) {
          nums.splice(i+1, 1);
          break;
        }
        // left and right same size
        if (Math.abs(nums[i]) === Math.abs(nums[i + 1])) {
          nums.splice(i, 2);
          break;
        }
        // right has larger size
        else {
          nums.splice(i, 1);
          break;
        }
      }
    }
  }
  return JSON.stringify(nums);
}

const nums = [10, 2, -5];

document.getElementById('ans').textContent = asteroidCollision(nums);