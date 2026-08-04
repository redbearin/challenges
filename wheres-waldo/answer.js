const whereIsWaldo = yard => {
  // more than one of element in
  // first row, first column
  if (yard[1].includes(yard[0][0])) {
    // row by row
    for (let i = 0; i < yard.length; i++) {
      // element by element in row
      for (let j = 0; j < yard[i].length; j++) {
        // element different than first  
        // row, first column 
        if (yard[i][j] !== yard[0][0])
          // return location
          return JSON.stringify([i + 1, j + 1]);
      }
    }
  }
  // return location 
  else
    return JSON.stringify([1, 1]);
};

const yard = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
];

document.getElementById('ans').textContent = whereIsWaldo(yard);