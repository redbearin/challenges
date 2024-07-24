findGlasses = arr => {
  let flagO = false;
  let flagMin = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('O') && arr[i].includes('-')) {
      for (let j = 0; j < arr[i].length; j++) {
        if (flagO) {
          if(flagMin) {
            if (arr[i][j] !== '-') {
              if (arr[i][j] === 'O') {
                return i;
              } 
              flagO = false;
              flagMin = false;
              break;
            }
          }
          if(arr[i][j] === '-') {
            flagMin = true;
          }
        }
        else if (arr[i][j] === 'O') {
          flagO = true;
        }
      }
    }
  }
}

const arr = ['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O'];

document.getElementById('ans').textContent = findGlasses(arr);