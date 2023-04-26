countBoomerangs = arr => {
  let count = 0;
  let i = 2;
  while (i < arr.length) {
    if (arr[i - 2] === arr[i] && 
        arr[i] !== arr[i-1]) {
      count++;
    }
    i++;
  }
  return count;
}

const arr = [9, 5, 9, 5, 1, 1, 1];

document.getElementById('ans').textContent = countBoomerangs(arr); 