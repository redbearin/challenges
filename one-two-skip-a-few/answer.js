howManyMissing = arr => {
  let last = arr[0];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] !== last + 1) {
      count++;
      last++;
    }
    last++;
  }
  return count;
}

const arr = [1, 3, 5, 7, 9, 11];

document.getElementById('ans').textContent = howManyMissing(arr);