isPrime = n => {
  // if n is less than 2 not a prime
  if (n < 2) 
    return false;

  // Loop from 2 to square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
      // If i is a divisor of n, n not prime
      if (n % i === 0) return false;
  }
  return true;
}

interprime = num => {
  let leftPrime;
  // find prime to left
  for (let i = num - 1; i > 1; i--) {
    if (isPrime(i)) {
      leftPrime = i;
      break;
    }
  }
  // prime to right same distance as prime to left
  if (isPrime(num + (num - leftPrime)))
    return JSON.stringify([leftPrime, num + (num - leftPrime)]);
  // no prime on right same distance as prime on left
  else 
    return JSON.stringify([]);
}

const num = 8;

document.getElementById('ans').textContent = interprime(num);