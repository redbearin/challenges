arrayOperation = (x, y, n) => {
  nums = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) {
      nums.push(i);
    }
  }
  return JSON.stringify(nums);
}

const x = 1;
const y = 10;
const n = 3;

document.getElementById('ans').textContent = arrayOperation(x, y, n);