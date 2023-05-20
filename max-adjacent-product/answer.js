adjacentProduct = arr => {
  let maxPro = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] * arr[i - 1] > maxPro) {
      maxPro = arr[i] * arr[i - 1];
    }
  }
  return maxPro;
}

const arr = [3, 6, -2, -5, 7, 3];

document.getElementById('ans').textContent = adjacentProduct(arr);