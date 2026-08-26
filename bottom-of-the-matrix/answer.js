lowerTriang = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[i][j] = 0;
    }
  }
  return JSON.stringify(arr);
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

document.getElementById('ans').textContent = lowerTriang(arr);