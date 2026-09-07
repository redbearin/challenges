getAbsSum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum;
}

const arr = [-3, -4, -10, -2, -3];

document.getElementById('ans').textContent = getAbsSum(arr)