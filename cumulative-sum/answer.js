cumulativeSum = arr => {
  let sum = 0;
  let cumArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    cumArr.push(sum);
  }
  return JSON.stringify(cumArr);
};

const arr = [1, -2, 3];

document.getElementById('ans').textContent = cumulativeSum(arr);