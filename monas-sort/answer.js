numberOfSwaps = arr => {
  let temp;
  let swaps = 0;
  const sortedStr = [... arr].sort((a,b) => a - b).join('');
  let arrStr = arr.join('');
  while (sortedStr !== arrStr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        swaps++;
      }
    }
    arrStr = arr.join('');
  }
  return swaps;
}

const arr = [5, 4, 3];

document.getElementById('ans').textContent = numberOfSwaps(arr);