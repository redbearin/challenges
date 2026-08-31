weeklySalary = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 5 || i === 6) {
      if (arr[i] > 8) {
        sum += (arr[i] - 8) * 30 + 160;
      }
      else {
        sum += arr[i] * 20;
      }
    }
    else {
      if (arr[i] > 8) {
        sum += (arr[i] - 8) * 15 + 80;
      }
      else {
        sum += arr[i] * 10;
      }
    }
  }
  return sum;
}

const arr = [10, 10, 10, 0, 8, 0, 0];

document.getElementById('ans').textContent = weeklySalary(arr);