// all but cases when there are less than 3 columns and less than 3 rows

cropHydrated = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      // top left
      if (i === 0 && j === 0) {
        if (arr[i][j] === 'c') {
          if (arr[i+1][j] === 'c' &&
            arr[i+1][j+1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }   
        }
      }
      // top right
      else if (i === 0 && j === arr[i].length - 1) {
        if (arr[i][j] === 'c') {
          if (arr[i+1][j] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i][j-1] === 'c') {
            return false;
          }
        }
      }
      // bottom left
      else if (i === arr.length - 1 && j === 0) {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i-1][j+1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
        }
      }
      // bottom right
      else if (i === arr.length - 1 && j === arr[i].length - 1) {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i-1][j-1] === 'c' &&
            arr[i][j-1] === 'c') {
            return false;
          }
        } 
      }
      // top row in the center
      else if (i === 0) {
        if (arr[i][j] === 'c') {
          if (arr[i+1][j] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i+1][j+1] === 'c' &&
            arr[i][j-1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
        }
      }
      //bottom row center
      else if (i === arr.length - 1) {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i-1][j-1] === 'c' &&
            arr[i-1][j+1] === 'c' &&
            arr[i][j-1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
        }   
      }
      // left column center
      else if (j === 0) {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i+1][j] === 'c' &&
            arr[i-1][j+1] === 'c' &&
            arr[i+1][j+1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
        }
      }
      // right column center
      else if (j === arr[i].length -1) {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i+1][j] === 'c' &&
            arr[i-1][j-1] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i][j-1] === 'c') {
            return false;
          }
        }
      }
      // inside
      else {
        if (arr[i][j] === 'c') {
          if (arr[i-1][j] === 'c' &&
            arr[i+1][j] === 'c' &&
            arr[i-1][j-1] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i-1][j+1] === 'c' &&
            arr[i+1][j+1] === 'c' &&
            arr[i][j-1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
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