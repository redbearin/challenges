minMax = arr => {
  arr.sort((a,b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}

const arr = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = minMax(arr);