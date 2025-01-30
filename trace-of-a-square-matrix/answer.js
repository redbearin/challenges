getTrace = matrix => {
  if (matrix[0].length !== matrix.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
}

const matrix = [
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
];

document.getElementById('ans').textContent = getTrace(matrix);