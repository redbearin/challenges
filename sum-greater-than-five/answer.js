sumFive = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      sum += arr[i];
    }
  }
  return sum;
}

const arr = [1, 5, 20, 30, 4, 9, 18];

document.getElementById('ans').textContent = sumFive(arr);