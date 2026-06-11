factorChain = nums => {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] % nums[i - 1]) {
      return false;
    }
  }
  return true;
}

const nums = [1, 2, 4, 8, 16, 32];

document.getElementById('ans').textContent = factorChain(nums);