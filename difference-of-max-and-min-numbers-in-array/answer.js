diffMaxMin = arr => {
  return Math.max(...arr) - Math.min(...arr);
}

const arr = [10, 4, 1, 4, -10, -50, 32, 21];

document.getElementById('ans').textContent = diffMaxMin(arr);