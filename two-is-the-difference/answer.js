differenceTwo = nums => {
  nums.sort();
  const pairs = [];
  for (let i = 0; i < nums.length; i++) { 
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] === 2) {
          pairs.push([nums[i], nums[j]]);
      }
    }
  }
  return JSON.stringify(pairs);
}

const nums = [4, 3, 1, 5, 6];

document.getElementById('ans').textContent = differenceTwo(nums);