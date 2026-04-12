rangeOfNum = (low, high) => {
  const arr = [];
  for (let i = low + 1; i < high; i++) {
    arr.push(i);
  }
  return JSON.stringify(arr);
}

const low = 2;
const high = 11;

document.getElementById('ans').textContent = rangeOfNum(low, high);