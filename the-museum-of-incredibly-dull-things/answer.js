removeSmallest = nums => {
  const min = Math.min(...nums);
  const idx = nums.indexOf(min);
  return JSON.stringify(nums.slice(0, idx).concat(nums.slice(idx + 1)));
}

const nums = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = removeSmallest(nums);