numbersSum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}

const arr = [1, 2, "13", "4", "645"];

document.getElementById('ans').textContent = numbersSum(arr);