trace = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

const arr = [
  [1, 4],
  [4, 1]
];

document.getElementById('ans').textContent = trace(arr);