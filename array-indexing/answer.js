valueAt = (arr, idx) => arr[Math.floor(idx)];

const arr = [1, 2, 3, 4];
const idx = 6.535355314 / 2;

document.getElementById('ans').textContent = valueAt(arr, idx);