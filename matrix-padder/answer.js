padMatrix = arr => {
  const len = arr.length;
  for (let i = 0; i < len + 2; i++) {
    if (i === 0) {
      
    }
    arr[i].unshift(0);
    arr[i].push(0);
  }
}

const arr = [
  [1, 2, 4, 5],
  [8, 6, 9, 7],
  [3, 4, 5, 9]
];

document.getElementById('ans').textContent = padMatrix(arr);