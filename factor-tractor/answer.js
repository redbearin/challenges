const primeFactorize = num => {
    let primeFactors = [];
    // no possible to have a prime
    if (num <= 1) {
      return primeFactors;
    }
    // start with the first prime
    let i = 2;
    // primes possible
    while (num > 1) {
      // i is a prime factor
      while (num % i === 0) {
        primeFactors.push(i);
        // go to next num
        num = num / i;
      }
      // increment
      i++;
    }
    return JSON.stringify(primeFactors);
};

const num = 77;

document.getElementById('ans').textContent = primeFactorize(num);