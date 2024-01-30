hasIdentical = arr => {
  // not a square matrix
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== arr.length) {
      return false;
    }
  }
  let match;
  // row
  for (let i = 0; i < arr.length; i++) {
    // column by column
    for (let j = 0; j < arr[i].length; j++) {
      // column elements
      match = true;
      // row by row within column
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] !== arr[k][j]) {
          match = false;
          break;
        } 
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
}

const arr =  [
	[4, 4, 4, 4], 
	[2, 4, 9, 8], 
	[5, 4, 7, 7], 
	[6, 4, 1, 0]
];

document.getElementById('ans').textContent = hasIdentical(arr);