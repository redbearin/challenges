findASeat = (max, arr) => {
  const fiftyPer = max/arr.length / 2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= fiftyPer) {
      return i;
    }
  }
  return -1;
}

const arr = [35, 23, 18, 10, 40];
const max = 200;

document.getElementById('ans').textContent = findASeat(max, arr);