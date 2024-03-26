progressDays = arr => {
  let proDays = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      proDays++;
    }
  }
  return proDays;
}

const arr = [3, 4, 1, 2];

document.getElementById('ans').textContent = progressDays(arr);