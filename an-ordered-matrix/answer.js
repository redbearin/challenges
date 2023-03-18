orderedMatrix = (numRows, numCols) => {
  const matrix = [];
  count = 0;
  let sub;
  for (let i = 0; i < numRows; i++) {
    sub = [];
    for (let j = 0; j < numCols; j++) {
      count++;
      sub.push(count);
    }
    matrix.push(sub);
  }
  return JSON.stringify(matrix);
}

const numRows = 1;
const numCols = 5;

document.getElementById('ans').textContent = orderedMatrix(numRows, numCols);