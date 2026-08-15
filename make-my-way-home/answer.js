distanceHome = nums => Math.abs(nums.reduce((acc, val) => acc + val, 0));

const nums = [3, 4, -5, -2];

document.getElementById('ans').textContent = distanceHome(nums);