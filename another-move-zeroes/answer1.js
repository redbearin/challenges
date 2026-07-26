moveZeroes = nums => {
  const count = nums.filter(v => v === 0).length;
  return JSON.stringify((nums.join('').replace(/0/g, "") + "0".repeat(count)).split('').map(Number));
}

const nums = [1, 0, 1, 2, 0, 1, 3];

document.getElementById('ans').textContent = moveZeroes(nums);