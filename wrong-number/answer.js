wrongNumber = arr => {
  let sum, sumRow, rowErr, colErr;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j === arr.length - 1) {
        if (sum !== arr[i][j]) {
          rowErr = i;
          sumRow = sum;
          flag = true;
          break;
        }
      }
      else {
        sum += arr[i][j];
      }
    }
    if (flag) {
      flag = false;
      break;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        if (sum !== arr[i][j]) {
          colErr = j;
          flag = true;
          break;
        }
      }
      else {
        sum += arr[i][j];
      }
    }
    if (flag)
      break;
  }
  if (colErr === arr.length - 1) {
    return sumRow;
  }
  else {
    if (sumRow > arr[rowErr][arr.length - 1]) 
      return arr[rowErr][colErr] + (arr[rowErr][arr.length - 1] - sumRow);
    else
      return arr[rowErr][colErr] - (arr[rowErr][arr.length - 1] - sumRow)
  }

}

const arr = [
  [1, 2, 3, 7 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,45]
]

document.getElementById('ans').textContent = wrongNumber(arr);