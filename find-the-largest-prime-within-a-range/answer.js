fatPrime = (n1, n2) => {
  if (n1 < n2) {
    high = n2;
    low = n1;
  }
  else {
    high = n1;
    low = n2;
  }
  let isPrime;
  for (let num = high; num >= low; num--) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return num;
    }
  }
}

const n1 = 10;
const n2 = 2;

document.getElementById('ans').textContent = fatPrime(n1, n2);