reverseImage = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] === 0 ?
      arr[i][j] = 1 :
      arr[i][j] = 0;
    }
  }
  return JSON.stringify(arr);
}

const arr = [
  [1, 0, 0],
  [1, 0, 0]
];

document.getElementById('ans').textContent = reverseImage(arr);