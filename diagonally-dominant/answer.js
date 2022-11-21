const diagDom = arr => {
  // diagonal element in that row
  let diagElement;
  // sum of elements not on diagonal in that row
  let rowSum;
  // go row by row through arr
  for (let i = 0; i < arr.length; i++) {
    // set the diagonal element
    diagElement = Math.abs(arr[i][i]);
    // initialize the sum for that row
    rowSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      // element not on diagonal
      if (j !== i) 
        // add abs value of the element 
        // to the row sum
        rowSum += Math.abs(arr[i][j]);
    }
    // row sum is not smaller than
    // abs of diag element
    // does not meet criteria
    if (diagElement <= rowSum)
      return false;
  }
  return true;
};

const arr = [
  [2, -1],
  [-1, 2]
];
document.getElementById('ans').textContent = diagDom(arr);