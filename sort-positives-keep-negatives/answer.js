posNegSort = nums => {
  let positives = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0)
      positives.push(nums[i]);
  }
  positives.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0)
      nums[i] = positives.shift();
  }
  return JSON.stringify(nums);
}
const nums = [];

document.getElementById('ans').textContent = posNegSort(nums);