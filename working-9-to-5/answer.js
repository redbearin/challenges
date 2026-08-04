overTime = arr => {
  if (arr[0] > 17) {
    return '$' + ((arr[1] - arr[0]) * arr[2] * arr[3]).toFixed(2);
  }
  if (arr[0] >= 9 && arr[1] <= 17) {
    return '$' + ((arr[1] - arr[0]) * arr[2]).toFixed(2);
  }
  if (arr[0] >= 9 && arr[1] > 17) {
    return '$' + (((17 - arr[0]) * arr[2]) + ((arr[1] - 17)* arr[2] * arr[3])).toFixed(2);
  }
}

const arr = [9, 17, 30, 1.5];

document.getElementById('ans').textContent = overTime(arr);