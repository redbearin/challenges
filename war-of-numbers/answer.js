warOfNumbers = arr => {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2)
      sumOdd += arr[i];
    else
      sumEven += arr[i];
  }
  return Math.abs(sumEven - sumOdd);
}

const arr = [2, 8, 7, 5];

document.getElementById('ans').textContent = warOfNumbers(arr);