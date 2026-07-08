portionHappy = nums => {
  let happyCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i-1] || nums[i] === nums[i+1])
      happyCount++;
  }
  return happyCount/nums.length;
}

const nums = [0, 1, 1, 0];

document.getElementById('ans').textContent = portionHappy(nums);