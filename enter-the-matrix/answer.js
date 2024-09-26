transposeMatrix = arr => {
  let str = '';
  //column
  for (let i = 0; i < arr[0].length; i++) {
    //row
    for (let j = 0; j < arr.length; j++) {
      str += arr[j][i] + ' ';
    }
  }
  return str.trim();
}

const arr = [
  ["The", "are"],
  ["columns", "rows."]
];

document.getElementById('ans').textContent = transposeMatrix(arr);