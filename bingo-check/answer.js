bingoCheck = arr => {
  const indices = [[],[],[],[],[]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'x') {
        indices[i].push(j);
      }
    }
  }
  // row of x
  let count = 0;
  for (let i = 0; i < indices.length; i++) {
    if (indices[i].length > 1 && indices[i].length < 5) {
      return false;
    }
    if (count && indices[i].length > 0) {
      return false;
    }
    if (indices[i].length === 5) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  }
  //column of x
  count = 0;
  let col = indices[0][0];
  for (let i = 0; i < indices.length; i++) {
    if (indices[i][0] === col) {
      count++;
    }
  }
  if (count === 5) {
    return true;
  }
  //dia
  let sum = 0;
  for (let i = 0; i < indices.length; i++) {
    sum += indices[i][0];
  }
  if (sum === 10) {
    return true;
  }
}

const arr = [
	[37, 16, 84, 51, 33],
	[64, 12, 47, 32, 90],
	["x", "x", "x", "x", "x"],
	[67, 19, 98, 39, 44],
	[21, 75, 24, 30, 52]
];

document.getElementById('ans').textContent = bingoCheck(arr);