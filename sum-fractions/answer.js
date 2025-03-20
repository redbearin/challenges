sumFractions = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][0] / arr[i][1];
  }
  return Math.round(sum);
}

const arr = [[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]];

document.getElementById('ans').textContent = sumFractions(arr);