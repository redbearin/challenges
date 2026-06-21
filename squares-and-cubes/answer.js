checkSquareAndCube = nums => Math.pow(Math.sqrt(nums[0]), 3) === nums[1];

const nums = [16, 48];

document.getElementById('ans').textContent = checkSquareAndCube(nums);