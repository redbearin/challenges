depth = arr => Array.isArray(arr) ?
  1 + Math.max(0, ...arr.map(depth)) :
  0;

const arr = [1, [2, [3, [4]]]];

document.getElementById('ans').textContent = depth(arr);
