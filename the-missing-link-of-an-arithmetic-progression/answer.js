missing = nums => {
  //set the progression gap
  let gap = 0;
  gap = nums[1] - nums[0];
  if (nums[nums.length - 1] - nums[nums.length - 2] < gap)
    gap = nums[nums.length - 1] - nums[nums.length - 2];
  // go idx by idx thru nums
  // find the gap and id the num that 
  // should be in gap
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i-1] !== gap)
      return nums[i-1] + gap;
  }
}

const nums = [1.5, 2, 3];

document.getElementById('ans').textContent = missing(nums);