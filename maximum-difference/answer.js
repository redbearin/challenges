difference = arr => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}

const arr = [10, 15, 20, 2, 10, 6];

document.getElementById('ans').textContent = difference(arr);