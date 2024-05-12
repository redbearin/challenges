deepest = arr => {
  return Array.isArray(arr) ?
  1 + Math.max(0, ...arr.map(deepest)) :
  0;
} 
  
const arr = [1, [2, [3]], 4, [5, 6]];

document.getElementById('ans').textContent = deepest(arr);