evenLast = nums => {
  if (!nums.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum * nums[nums.length - 1];
}

const nums = [];

document.getElementById('ans').textContent = evenLast(nums);