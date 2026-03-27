missingNum = arr => {
  arr.sort((a,b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] + 1) {
      return arr[i - 1] + 1;
    }
  }
  if (arr[0] > 1) {
    return arr[0] - 1;
  }
  return arr[arr.length - 1] + 1;
}

const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

document.getElementById('ans').textContent = missingNum(arr);