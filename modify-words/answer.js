editWords = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase().split(' ').reverse();
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "") {
        arr[i][j] = "-";
      }
      arr[i][j] = arr[i][j].split('').reverse();
      if (arr[i][j].length > 3 && (arr[i][j][0] !== 'Y' && arr[i][j][1] !== 'T' && arr[i][j][2] !== 'I' && arr[i][j][3] !== 'C')) {
        arr[i][j].splice(Math.ceil(arr[i][j].length/2), 0, '-');
      }
      arr[i][j] = arr[i][j].join('');
    }
    arr[i] = arr[i].join(' ');
  }
  return JSON.stringify(arr);
}

const arr = ['New York City'];

document.getElementById('ans').textContent = editWords(arr);