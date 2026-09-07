oddProduct = arr => arr.reduce((acc, ele) => {
  if (ele % 2) {
    return acc * ele;
  }
  return acc;
}, 1);

const arr = [3, 4, 1, 1, 5];

document.getElementById('ans').textContent = oddProduct(arr);

