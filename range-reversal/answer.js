rangedReversal = (arr, lowIdx, highIdx) => {
  return JSON.stringify(arr.slice(0, lowIdx).concat(arr.slice(lowIdx, highIdx + 1).reverse()).concat(arr.slice(highIdx + 1)));
}

const arr = [1, 2, 3, 4, 5, 6];
const lowIdx = 1;
const highIdx = 3;

document.getElementById('ans').textContent = rangedReversal(arr, lowIdx, highIdx);