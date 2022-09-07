sumFoundIndexes = (arr, n) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      sum += i;
    }
  }
  return sum;
}

const arr = [5, 10, 15, 20];
const n = 2;

document.getElementById('ans').textContent = sumFoundIndexes(arr, n);