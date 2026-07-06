transposeMatrix = arr => {
  let transposed = [];
  let sub;
  for (let col = 0; col < arr[0].length; col++) {
    sub = [];
    for (let row = 0; row < arr.length; row++) {
      sub.push(arr[row][col]);
    }
    transposed.push(sub);
  }
  return JSON.stringify(transposed);
};

const arr = [
  [5, 5],
  [6, 7],
  [9, 1]
];

document.getElementById('ans').textContent = transposeMatrix(arr);