incrementToTop = arr => {
  arr.sort((a,b) => a-b);
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps += arr[arr.length - 1] - arr[i];
  }
  return steps;
}

const arr = [3, 10, 3];

document.getElementById('ans').textContent = incrementToTop(arr);