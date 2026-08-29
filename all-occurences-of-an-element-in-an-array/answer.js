getIndices = (arr, num) => {
  const indices = [];
  let idx = arr.indexOf(num);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(num, idx + 1);
  }
  return JSON.stringify(indices);
}

const arr = [1, 5, 5, 2, 7];
const num = 7;

document.getElementById('ans').textContent = getIndices(arr, num);