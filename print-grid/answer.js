printGrid = (rows, cols) => {
  let sub;
  let grid = [];
  for (let i = 0; i < rows; i++) {
    // build subarray
    // based on row increments
    sub = [i + 1];
    for (let j = 1; j < cols; j++) {
      sub.push(i + 1 + (j*rows));
    }
    grid.push(sub);
  }
  return JSON.stringify(grid);
}

let rows = 4;
let cols = 1;

document.getElementById('ans').textContent = printGrid(rows, cols);