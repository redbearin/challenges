findNaN = arr => {
  return arr.findIndex(Number.isNaN);
}

const arr = [1, 2, NaN];

document.getElementById('ans').textContent = findNaN(arr);