cropHydrated = arr => {
  // need to add edge cases
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] === 'c') {
        if (arr[i-1][j] === 'c' &&
          arr[i+1][j] === 'c' &&
          arr[i-1][j-1] === 'c' &&
          arr[i+1][j-1] === 'c' &&
          arr[i-1][j+1] === 'c' &&
          arr[i+1][j+1] === 'c' &&
          arr[i][j-1] === 'c' &&
          arr[i][j+1] === 'c') {
          console.log("i: ", i)
          console.log('j: ', j)
          return false;
        }
      }
    }
  }
  return true;
}

const arr = [
  [ "c", "w", "w", "w", "c" ],
  [ "w", "c", "c", "c", "c" ],
  [ "c", "c", "c", "c", "c" ],
  [ "w", "c", "c", "w", "c" ]
];

document.getElementById('ans').textContent = cropHydrated(arr);