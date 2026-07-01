nextElement = nums => nums[nums.length - 1] + (nums[1] - nums[0]);

const nums = [2, 2, 2, 2, 2];

document.getElementById('ans').textContent = nextElement(nums);