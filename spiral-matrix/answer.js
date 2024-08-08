spiralOrder = arr => {
  const base = arr[0];
  base.push(arr[1][arr[1].length - 1]);
  return base.concat(arr[2].reverse()).concat(arr[1].slice(0, -1));
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

document.getElementById('ans').textContent = spiralOrder(arr);