fire = (matrix, coords) => {
  return matrix[coords[0].charCodeAt(0) - 65][coords[1] - 1] === '*' ?
  'BOOM' :
  'splash';
}

const matrix = [
  [".", ".", ".", "*", "*"],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", ".", "*", "*", "."],
];
const coords = "C2";

document.getElementById('ans').textContent = fire(matrix, coords);