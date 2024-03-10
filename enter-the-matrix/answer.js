transposeMatrix = arr => {
  let str = '';
  // column by column thru arr
  for (let j = 0; j < arr[0].length; j++) {
    // go row by row thru arr
    for (let i = 0; i < arr.length; i++) {
      str += arr[i][j] + ' ';
    }
  }
  return str;
}

const arr = [
  ["You", "the"],
  ["must", "table"],
  ["transpose", "order."]
];

document.getElementById('ans').textContent = transposeMatrix(arr);