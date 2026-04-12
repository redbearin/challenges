isWordChain = arr => {
  let count;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== arr[i-1].length) {
      return false;
    }
    count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[i-1][j]) {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
}
const arr = ["meal", "seal", "seat", "beat", "beet"];

document.getElementById('ans').textContent = isWordChain(arr);