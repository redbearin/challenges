cropHydrated = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // top left
      if (i === 0 && j === 0) {
        if (arr[i][j] === 'c') {
          // one row
          if (arr.length === 1) {
            // one unit
            if (arr[i].length === 1) {
              return false;
            }
            // more than one unit
            if (arr[i][j+1] === 'c') {
              return false;
            }
          }
          // multiple rows
          else if (arr[i+1][j] === 'c' &&
                arr[i+1][j+1] === 'c' &&
                arr[i][j+1] === 'c') {
            return false;
          }
        }
      }
      // top right
      else if (i === 0 && j === arr[i].length - 1) {
        if (arr[i][j] === 'c') {
          // one row
          if (arr.length === 1 && arr[i][j-1] === 'c') {
            return false;
          }
          // multiple rows
          if (arr.length !== 1 &&
            arr[i+1][j] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i][j-1] === 'c') {
            return false;
          }
        }
      }
      // bottom left
      else if (i === arr.length - 1 && j === 0) {
        if (arr[i][j] === 'c') {
          // one row
          if (arr.length === 1 && arr[i][j+1] === 'c') {
            return false;
          }
          //multiple rows
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
          // one row
          if (arr.length === 1 && arr[i][j-1] === 'c') {
            return false;
          }
          //multiple rows
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
          // one row
          if (arr.length === 1 && 
            arr[i][j-1] === 'c' &&
            arr[i][j+1] === 'c') {
            console.log('top row center one row')
            return false;
          }
          // multiple rows
          if (arr.length !== 1 &&
            arr[i+1][j] === 'c' &&
            arr[i+1][j-1] === 'c' &&
            arr[i+1][j+1] === 'c' &&
            arr[i][j-1] === 'c' &&
            arr[i][j+1] === 'c') {
            return false;
          }
        }
      }
      //bottom row center
      else if (i === arr.length - 1 && arr.length !== 1) {  
        if (arr[i][j] === 'c') {
          // one row already handled above
          // multiple rows
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
          // one column
          if (arr[i].length === 1 &&
            arr[i-1][j] === 'c' &&
            arr[i+1][j] === 'c') {
            return false;
          }
          //multiple columns
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
      else if (j === arr[i].length -1 && 
               arr[i].length !== 1) {
        if (arr[i][j] === 'c') {
          //one column already handled above
          //multiple columns
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
    [ "c", "w", "w", "c", "c", "w", "c" ]
  ];

document.getElementById('ans').textContent = cropHydrated(arr);