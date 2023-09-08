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
  ["@", "@", "@", "@"],
  [2, 3], [3, 4], [4, 4]
];

document.getElementById('ans').textContent = countIdentical(arr) 