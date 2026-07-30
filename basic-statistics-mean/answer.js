mean = nums => Math.round(nums.reduce((acc, val) => acc + val, 0)/nums.length * 10)/10;

const nums = [2, 3, 3, 6, 6, 8, 9, 10];

document.getElementById('ans').textContent = mean(nums);