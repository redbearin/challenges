findMissingNumber = nums => {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1))/2;
  return expectedSum - nums.reduce((acc, ele) => acc + ele, 0);
}

const nums = [4, 2, 1, 5];

document.getElementById('ans').textContent = findMissingNumber(nums);