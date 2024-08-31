orderedMatrix = (rows, cols) => {
  let row;
  const arr = [];
  let count = 1;
  for (let i = 0; i < rows; i++) {
    row = [];
    for (let j = 0; j < cols; j++) {
      row.push(count);
      count++;
    }
    arr.push(row);
  }
  return JSON.stringify(arr);
}

const rows = 5;
const cols = 5;

document.getElementById('ans').textContent = orderedMatrix(rows, cols);