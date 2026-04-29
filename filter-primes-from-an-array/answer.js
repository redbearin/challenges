filterPrimes = arr => {
  const primes = [];
  let isPrime = true;
  // go element by element thru array
  for (let i = 0; i < arr.length; i++) {
    // a number that cannot be prime, skip
    if (arr[i] < 2)
      continue;
    // check to see if number is a prime
    // set a flag if it isn't a prime
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    // is a prime
    if (isPrime)
      primes.push(arr[i]);
    // reset flag
    else
      isPrime = true;
  }
  return JSON.stringify(primes);
}

const arr = [1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097];

document.getElementById('ans').textContent = filterPrimes(arr);