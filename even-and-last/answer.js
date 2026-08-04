evenLast = arr => {
  if (!arr.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i +=  2) {
    sum += arr[i];
  }
  return sum * arr[arr.length - 1];
}

const arr = [2, 3, 4, 5];

document.getElementById('ans').textContent = evenLast(arr);