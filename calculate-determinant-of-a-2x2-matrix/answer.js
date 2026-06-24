calcDeterminant = arr => arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0];

const arr = [
  [1, 2],
  [3, 4]
];

document.getElementById('ans').textContent = calcDeterminant(arr);