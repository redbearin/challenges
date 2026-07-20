moveZeroes = nums => 
  JSON.stringify(nums.sort((a, b) => (a === 0) - (b === 0)));

const nums = [1, 0, 1, 2, 0, 1, 3];

document.getElementById('ans').textContent = moveZeroes(nums);