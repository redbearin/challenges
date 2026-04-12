unique = arr => {
  arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  }
  return arr[0];
}

const arr = [3, 3, 3, 7, 3, 3];

document.getElementById('ans').textContent = unique(arr);