primeCount = (a, b) => {
  if (a === 1)
    a = 2;
  let count = 0;
  let isPrime;
  for (let i = a; i <= b; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime)
      count++;
  }
  return count;
}

const a = 1;
const b = 10;

document.getElementById('ans').textContent = primeCount(a, b);