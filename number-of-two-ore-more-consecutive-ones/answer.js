countOnes = arr => {
  let count = 0;
  let ttl = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
    if (count && arr[i] === 0) {
      if (count > 1) {
        ttl++;
      }
      count = 0;
    }
    if (i === arr.length - 1 && count > 1) {
      ttl++;
    }
  }
  return ttl;
}

const arr = [1, 0, 0, 1, 1, 0, 1, 1, 1];
document.getElementById('ans').textContent = countOnes(arr);