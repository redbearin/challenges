simplePair = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === n) {
        return JSON.stringify([arr[i], arr[j]]);
      }
    }
  }
  return null;
}

const arr = [1, 2, 3];
const n = 3;

document.getElementById("ans").textContent = simplePair(arr, n);