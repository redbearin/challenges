countBoomerangs = arr => {
  let count = 0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 2] === arr[i] && 
        arr[i - 2] !== arr[i - 1]) {
      count++;
    }
  }
  return count;
}

const arr = [9, 5, 9, 5, 1, 1, 1];

document.getElementById('ans').textContent = countBoomerangs(arr);