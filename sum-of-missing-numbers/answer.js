sumMissingNumbers = arr => {
  arr.sort((a,b) => a-b);
  let sum = 0;
  for (let i = arr[0] + 1; i <= arr[arr.length - 1] - 1; i++) {
    if (arr.includes(i) === false) {
      sum += i;
    }
  }
  return sum;
}
const arr = [10, 20, 30, 40, 50, 60];

document.getElementById('ans').textContent = sumMissingNumbers(arr);
