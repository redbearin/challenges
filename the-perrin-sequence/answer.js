perrin = n => {
  const arr = [3,0,2];
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 3])
  }
  return arr[n];
}

const n = 8;

document.getElementById('ans').textContent = perrin(n);