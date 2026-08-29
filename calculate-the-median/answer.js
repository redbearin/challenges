median = nums => {
  nums.sort((a,b) => a-b);
  console.log(nums)
  if (nums.length % 2) {
    return nums[Math.floor(nums.length/2)];
  }
  let lower = nums[nums.length/2 - 1];
  return (nums[nums.length/2] - lower)/2 + lower;
}

const nums = [2, 5, 6, 2, 6, 3, 4, 8];

document.getElementById('ans').textContent = median(nums);