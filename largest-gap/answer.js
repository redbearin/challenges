largestGap = arr => {
  arr.sort((a,b) => a-b);
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if(Math.abs(arr[i] - arr[i-1]) > max) {
      max = Math.abs(arr[i] - arr[i-1]);
    }
  }
  return max;
}

const arr = [9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5];

document.getElementById('ans').textContent = largestGap(arr);