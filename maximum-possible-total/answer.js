maxTotal = arr => {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('ans').textContent = maxTotal(arr);