whoWon = arr => {
  // rows and columns
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== "B" && 
        arr[i][0] === arr[i][1] && 
        arr[i][1] === arr[i][2]) {
      return arr[i][0];
    }
    if (arr[0][i] !== "B" && 
        arr[0][i] === arr[1][i] && 
        arr[1][i] === arr[2][i]) {
      return arr[0][i];
    } 
  }
  // diagonals
  if (arr[0][0] !== "B" && 
      arr[0][0] === arr[1][1] && 
      arr[1][1] === arr[2][2]) {
    return arr[0][0];
  }
  if (arr[0][2] !== "B" && 
      arr[0][2] === arr[1][1] && 
      arr[1][1] === arr[2][0]) {
    return arr[0][2];
  }
  return "Tie";
}

const arr = [
  ["X", "X", "O"],
  ["O", "B", "O"],
  ["X", "X", "O"]
];

document.getElementById('ans').textContent = whoWon(arr);