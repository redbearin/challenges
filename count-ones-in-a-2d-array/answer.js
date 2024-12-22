countOnes = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
}

const arr = [
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
];

document.getElementById('ans').textContent = countOnes(arr);