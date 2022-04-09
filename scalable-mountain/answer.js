isScalable = arr => {
  console.log('inside')
  for (let i = 1; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i-1]) > 5 || Math.abs(arr[i+1] - arr[i]) > 5)
      return false;
  }
  console.log('outside')
  return true;
}

const arr = [2, 9, 11, 10, 18, 21];

document.getElementById('ans').textContent = isScalable(arr);