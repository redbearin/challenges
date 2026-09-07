primeInRange = (low, high) => {
  if (high === 2) {
    return true;
  }
  for (let i = low; i <= high; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
      if (j === i - 1) {
        return true;
      }
    }
  }
  return false;
}

const low = 0;
const high = 2;

document.getElementById('ans').textContent = primeInRange(low, high);