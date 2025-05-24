median = nums => {
  if(nums.length % 2) {
    return nums[Math.floor(nums.length/2)];
  }
  return (nums[nums.length/2] + nums[nums.length/2 - 1]) / 2;
}

const nums = [1, 2, 2, 4, 7, 8, 9, 10];

document.getElementById('ans').textContent = median(nums);