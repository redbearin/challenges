greaterThanSum = arr => {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum += arr[i];
  }
  return true;
}

const arr = [1, 2, 4, 6, 13];

document.getElementById('ans').textContent = greaterThanSum(arr);

