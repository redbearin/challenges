pop = arr => {
  let midPt = Math.floor(arr.length/2);
  for (let i = 1; i <= midPt; i++) {
    arr[midPt - i] = arr[midPt] - i;
    arr[midPt + i] = arr[midPt] - i;
  }
  return JSON.stringify(arr);
}

const arr = [0];

document.getElementById('ans').textContent = pop(arr);
