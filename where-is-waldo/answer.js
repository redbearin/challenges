whereIsWaldo = arr => {
  let base;
  if (arr[0][0] === arr[0][1] || 
      arr[0][0] === arr[1][0] || 
      arr[0][0] === arr[0][2]) {
    base = arr[0][0];
  }
  else {
    return JSON.stringify([1,1]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== base) {
        return JSON.stringify([i + 1,j + 1]);
      }
    }
  }
}

const arr = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
];

document.getElementById('ans').textContent = whereIsWaldo(arr);