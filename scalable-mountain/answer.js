isScalable = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i-1]) > 5)
      return false;
  }
  return true;
}

const arr = [2, 9, 11, 10, 18, 21];

document.getElementById('ans').textContent = isScalable(arr);