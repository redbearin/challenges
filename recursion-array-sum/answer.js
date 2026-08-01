sum = arr => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}

const arr = [1, 2, 3, 4];

document.getElementById('ans').textContent = sum(arr);