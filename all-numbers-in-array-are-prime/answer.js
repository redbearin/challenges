allPrime = arr => {
  if (arr.includes(1)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        return false;
      }
    }
  }
  return true;
}

const arr = [2, 3, 5, 7, 13, 17, 19, 23, 29];

document.getElementById('ans').textContent = allPrime(arr);