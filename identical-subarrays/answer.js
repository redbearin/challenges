countIdentical = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if ([... new Set(arr[i])].length === 1) {
      count++;
    }
  }
  return count;
}

const arr = [
  [33, 33],
  [5],
  ["a", "a"],
  [2, 2, 2],
  [1, 2, 2],
  [3, 1]
];

document.getElementById('ans').textContent = countIdentical(arr);