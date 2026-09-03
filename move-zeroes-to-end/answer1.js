moveZeroes = arr => {
  let pointIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pointIdx] = arr[i];
      pointIdx++;
    }
  }
  for(let i = pointIdx; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

const arr = [0, 1, 0, 3, 12];

document.getElementById('ans').textContent = moveZeroes(arr);