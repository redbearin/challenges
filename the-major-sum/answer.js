majorSum = arr => {
  let plusSum = 0;
  let negSum = 0;
  let zeroCt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      plusSum += arr[i];
    }
    if (arr[i] < 0) {
      negSum += arr[i];
    }
    if (arr[i] === 0) {
      zeroCt++;
    }
  }
  const maxVal = Math.max(plusSum, Math.abs(negSum), zeroCt);
  if (maxVal === Math.abs(negSum)) {
    return negSum;
  }
  return maxVal;
}

const arr = [-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0];

document.getElementById('ans').textContent = majorSum(arr);