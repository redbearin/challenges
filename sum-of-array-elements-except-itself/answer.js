arrEleSum = arr => {
  let sum;
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j< arr.length; j++) {
      if (i === j) {
        continue;
      }
      else {
        sum += arr[j];
      }
    }
    sums.push(sum);
  }
  return JSON.stringify(sums);
}

const arr = [1, 2, 3, 2, 1];

document.getElementById('ans').textContent = arrEleSum(arr);