findMissingNumber = (arr, n) => {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, current) => sum + current, 0);
  return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5];
const n = 5;

document.getElementById('ans').textContent = findMissingNumber(arr, n);

