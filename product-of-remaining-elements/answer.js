canPartition = arr => {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      else {
        sum *= arr[j];
      }
    }
    if (arr[i] === sum) {
      return true;
    }
  }
  return false;
}
const arr = [-1, -20, 5, -1, -2, 2];

document.getElementById('ans').textContent = canPartition(arr);