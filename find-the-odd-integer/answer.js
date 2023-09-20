findOdd = nums => {
  const counts = {};
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] ?
    counts[nums[i]] += 1:
    counts[nums[i]] = 1;
  }
  console.log(counts)
  for (key in counts) {
    if (counts[key] % 2) {
      return +key;
    }
  }
}

const nums = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];

document.getElementById('ans').textContent = findOdd(nums);