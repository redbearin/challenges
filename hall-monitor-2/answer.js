possiblePath = arr => {
  const paths = {1: [2], 2: [1, 'H'], 3: [4], 4: ['H', 3], H: [2, 4]};
  for (let i = 1; i < arr.length; i++) {
    if (!paths[arr[i - 1]].includes(arr[i])) {
      return false;
    }
  }
  return true;
}

const arr = ["H", 1, 2];

document.getElementById('ans').textContent = possiblePath(arr);