block = rows => {
  let count = 0;
  for (let i = 0; i < rows.length - 1; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j]=== 2) {
        count += rows.length - i - 1;
      }
    }
  }
  return count;
}

const rows = [
  [1, 2, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]

document.getElementById('ans').textContent = block(rows);