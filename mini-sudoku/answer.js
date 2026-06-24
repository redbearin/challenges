isMiniSudoku = arr => {
  const condArr = [... new Set(arr.flat())];
  if (condArr.length < 9)
    return false;
  condArr.sort();
  if (condArr[0] < 1 || condArr[8] > 9) {
    return false;
  }
  return true;
}

const arr = [[1, 1, 3], [6, 5, 4], [8, 7, 9]];

document.getElementById('ans').textContent = isMiniSudoku(arr);