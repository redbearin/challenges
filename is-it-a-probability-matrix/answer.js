const isProbMatrix = arr => {
  // rows and columns not same length
  // not square
  if (arr[0].length !== arr.length) {
    return false;
  }
  // go row by row through arr
  for (let i = 0; i < arr.length; i++) {
    // sum of row not between 0 and 1
    if(arr[i].reduce((acc, val) => acc + val) !== 1)
      return false;
    // element is not between 0 and 1
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0 || arr[i][j] > 1)
        return false;
    }
  }
  return true;
};

const arr = [
  [0.5, 0.4],
  [0.5, 0.6]
];

document.getElementById('ans').textContent = isProbMatrix(arr);