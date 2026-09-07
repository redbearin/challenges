lowestElement = (arr, row, col) => {
  let lowest = Infinity;
  if (row - 1 >= 0) {
    if (arr[row - 1][col] < lowest) 
      lowest = arr[row - 1][col];
  } 
  if (row + 1 <= arr.length) {
    if (arr[row + 1][col] < lowest)
      lowest = arr[row + 1][col]; 
  } 
  if(col - 1 >= 0) {
     if (arr[row][col - 1] < lowest)
      lowest = arr[row][col - 1];
  }
  if (col + 1 <= arr.length) {
    if (arr[row][col + 1] < lowest) 
      lowest = arr[row][col + 1];
  }    
  if (col + 1 <= arr.length && row + 1 <= arr.length) {
    if (arr[row + 1][col + 1] < lowest) 
      lowest = arr[row + 1][col + 1];
  }
  if (col - 1 >= 0 && row - 1 >= 0) {
    if (arr[row - 1][col - 1] < lowest) 
      lowest = arr[row - 1][col - 1];
  }
  return lowest;
}

const arr = [
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
];
const row = 0;
const col = 0;
document.getElementById('ans').textContent = lowestElement(arr, row, col);