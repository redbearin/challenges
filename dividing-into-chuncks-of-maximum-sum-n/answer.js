divide = (nums, n) => {
  const chunks = [];
  let sum = 0;
  let sub;
  let i = 0;
  while (i < nums.length) {
    sum = 0;
    sub = [];
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      // sum greater than target
      if (sum > n) {
        // add subarray to chunks
        chunks.push(sub);
        // add last element to subarray
        // add subarray to chunks
        // exit out of loops
        if (j === nums.length - 1) {
          sub = [];
          sub.push(nums[j]);
          chunks.push(sub);
          // set to exit out of while
          i = nums.length;
          // exit out of for loop
          break;
        }
        // set position to enter while
        i = j;
        // exit for loop
        break;
      }
      // sum less than target
      else {
        sub.push(nums[j]);
        if (j === nums.length - 1) {
          chunks.push(sub);
          // set to exit out of while
          i = nums.length;
          // exit out of for loop
          break;
        }
      }
    }
  }
  return JSON.stringify(chunks);
}
const nums = [1, 0, 1, 1, -1, 0, 0];
const n = 1;

document.getElementById('ans').textContent = divide(nums, n);