isMagicSquare = arr => {
  let diagSum = 0;
  let sum;

  // sum of left to right diag
  for (let i = 0; i < arr.length; i++) {
    diagSum += arr[i][i];
  }

  // sum left to right diag and compare to right to left diag
  sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i][i];
  }
  if (sum !== diagSum)
    return false;
  
  // sum each row and compare to right to left diag
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    if (sum != diagSum)
      return false;
  }

  // sum each col and compare to right to left diag
  for (let j = 0; j < arr.length; j++) {
    sum = 0;
    for (let i = 0; i < arr[j].length; i++) {
      sum += arr[i][j];
    }
    if (sum != diagSum)
      return false;
  }
  
  // all cols, rows, and daigonals same
  return true;
}
const arr = [
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
];

document.getElementById('ans').textContent = isMagicSquare(arr);