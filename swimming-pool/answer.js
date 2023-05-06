const isLegitimate = arr => {
  // check the top and bottom rows
  if (arr[0].includes(1) || arr[arr.length - 1].includes(1)) 
    return false;
  // go row by row through the array
    // check the right and left columns
    // in each row
  for (let i = 1; i < arr.length - 1; i++) {
    // first and last element of the row
    if (arr[i][0] === 1 || 
        arr[i][arr[i].length - 1] === 1)
      return false;
  }
  return true;
};

const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];

document.getElementById('ans').textContent = isLegitimate(arr); 