isShuffledWell = arr => {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - 1 === arr[i - 1] && arr[i - 1] - 1 === arr[i - 2] ||
      arr[i] + 1 === arr[i - 1] && arr[i - 1] + 1 === arr[i - 2]) {
      return false;
  }
  return true;
}

const arr = [1, 5, 3, 8, 10, 2, 7, 6, 4, 9];


document.getElementById('ans').textContent = isShuffledWell(arr);