unique = arr => {
  arr.sort();
  if (arr[0] !== arr [1])
    return arr[0];
  return arr[arr.length - 1];
}

const arr = [0, 1, 1, 1, 1, 1, 1, 1];

document.getElementById('ans').textContent = unique(arr);