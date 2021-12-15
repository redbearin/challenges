cumulativeSum = arr => {
  let sum = 0;
  let cumArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum)
    cumArr.push(sum);
  }
  return JSON.stringify(cumArr);
};

const arr = [3, 3, -2, 408, 3, 3];

document.getElementById('ans').textContent = cumulativeSum(arr);