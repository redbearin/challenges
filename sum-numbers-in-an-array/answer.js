arraySum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ?
    sum += Math.sqrt(arr[i]):
    sum += Math.pow(arr[i], 2);
  }
  return +sum.toFixed(2);
}

const arr = [1, 3, 3, 1, 10];

document.getElementById('ans').textContent = arraySum(arr); 