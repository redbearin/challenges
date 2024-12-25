amplify = n => {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    i % 4 ?
    nums.push(i) :
    nums.push(i * 10);
  }
  return JSON.stringify(nums);
}

const n = 4;

document.getElementById('ans').textContent = amplify(n);