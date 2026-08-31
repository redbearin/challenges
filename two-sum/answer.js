const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return JSON.stringify([i, j]);
      }
    }
  }
}

const nums = [2,11,15,7];
const target = 9;

document.getElementById('ans').textContent = twoSum(nums, target);