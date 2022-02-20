portionHappy = nums => {
  let happyCount = 0;
  if (nums[0] === nums[1])
    happyCount++;
  if (nums[nums.length - 1] === nums[nums.length - 2])
    happyCount++;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i-1] || nums[i] === nums[i+1])
      happyCount++;
  }
  return happyCount/nums.length;
}

const nums = [1, 0, 0, 1, 1];

document.getElementById('ans').textContent = portionHappy(nums);