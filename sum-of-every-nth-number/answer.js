sumEveryNth = (arr, n) => {
  let sum = 0;
  for (let i = n - 1; i < arr.length; i += n) {
    sum += arr[i];
  }
  return sum;
}

const arr = [7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4];
const n = 4;

document.getElementById('ans').textContent = sumEveryNth(arr, n);