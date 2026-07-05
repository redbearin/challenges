percentFilled = arr => {
  let ctO = 0;
  for(let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] === 'o') {
        ctO++;
      }
    }
  }

  return Math.round(ctO/((arr.length - 2)*(arr[0].length - 2))*100) + '%';
}

const arr = [
  "######",
  "#ooo #",
  "#oo  #",
  "#    #",
  "#    #",
  "######"
]

document.getElementById('ans').textContent = percentFilled(arr);