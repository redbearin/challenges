isMagicSquare = arr => {
  let base, sumRow, sumCol;
  let sumDia = 0
  let sumDiaRev = 0;
  // rows and columns
  for (let i = 0; i < arr.length; i++) {
    sumRow = 0;
    sumCol = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sumRow += arr[i][j];
      sumCol += arr[j][i];
    }
    if (i === 0) {
      base = sumRow;
      if (sumCol !== base) {
        return false;
      }
    }
    else {
      if (sumRow !== base ||
          sumCol !== base) {
        return false;
      }
    }
  }
  // diagonals
  for (let i = 0; i < arr.length; i++) {
    sumDia += arr[i][i];
    sumDiaRev += arr[arr.length - (i+1)][arr.length - (i+1)];
  }
  if (sumDia !== base || 
      sumDiaRev !== base) {
    return false;
  }
  return true;
}

const arr = [
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
];

document.getElementById('ans').textContent = isMagicSquare(arr);