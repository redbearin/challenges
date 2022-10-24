findMissing = arr => {
  if (arr === null || !arr.length) {
    return false;
  }
  arr.sort((a,b) => a.length - b.length);
  if (!arr[0].length) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length - 1 !== arr[i-1].length)
      return arr[i-1].length + 1;
  }
}

const arr = [[5, 6, 7, 8, 9], [1, 2], [4, 5, 1, 1], [1]];

document.getElementById('ans').textContent = findMissing(arr);