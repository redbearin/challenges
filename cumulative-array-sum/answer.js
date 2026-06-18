cumulativeSum = arr => {
  const cumu = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    cumu.push(sum += arr[i]);
  }
  return JSON.stringify(cumu);
}
const arr = [1, 2, 3];

document.getElementById('ans').textContent = cumulativeSum(arr);