nearestElement = (n, arr) => {
  let dLow = Infinity;
  let idx = null;
  let num = null;
  let dist;
  for (let i = 0; i < arr.length; i++) {
    dist = Math.abs(arr[i] - n);
    if (dist < dLow) {
      dLow = dist;
      idx = i;
      num = arr[i];
    }
    if (dist === dLow && arr[i] > num) {
        num = arr[i];
        idx = i;
    }
  }
  return idx;
}

const n = -20;
const arr = [-50, -10, -30];

document.getElementById('ans').textContent = nearestElement(n, arr);