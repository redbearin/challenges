findTwoMissingNumbers = (nums, end) => {
  const newSetNums = new Set(nums);
  const missing = [];
  for (let i = 1; i <= end; i++) {
    if (!newSetNums.has(i)) {
      missing.push(i);
    }
  }
  return JSON.stringify(missing);
}

const nums = [1, 3, 5, 6];
const end = 6;

document.getElementById('ans').textContent = findTwoMissingNumbers(nums, end);