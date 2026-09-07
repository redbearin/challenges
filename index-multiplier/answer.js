indexMultiplier = arr => {
  return arr.reduce((ttl, val, idx) => val * idx + ttl, 0);
}

const arr = [-3, 0, 8, -6];

document.getElementById('ans').textContent = indexMultiplier(arr);