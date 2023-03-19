sumMissingNumbers = nums => {
  let sum = 0;
  for (let i = Math.min(...nums) + 1; i <= Math.max(...nums); i++) {
    if (!nums.includes(i)) {
      sum += i;
    }
  }
  return sum;
}

const nums = [4, 3, 8, 1, 2];

document.getElementById('ans').textContent = sumMissingNumbers(nums);

