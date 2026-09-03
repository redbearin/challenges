moveZeroes = arr => {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i,1);
      count++;
    }
  }
  return arr.concat(Array(count).fill(0));
}

const arr = [0, 1, 0, 3, 12];

document.getElementById('ans').textContent = moveZeroes(arr);