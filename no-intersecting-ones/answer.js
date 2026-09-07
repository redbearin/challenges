noIntersectingOnes = arr => {
  let count;
  // column
  for (let i = 0; i < arr[0].length; i++) {
    let count = 0;
    //row
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === 1) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
  }
  return true;
}

const arr = [
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
];

document.getElementById('ans').textContent = noIntersectingOnes(arr);
