nextPrime = num => {
  for (let possiblePrime = num; possiblePrime < Infinity; possiblePrime++) {
    // flag
    let notAPrime;
    for (let j = 2; j <= Math.sqrt(possiblePrime); j++) {
      notAPrime = false;
      // j is a divisor, so possiblePrime not a prime number
      if (possiblePrime % j === 0) {
        notAPrime = true;
        break;
      } 
    }
    // possiblePrime is a prime number
    if (!notAPrime)
      return possiblePrime;
  }
}

const num = 11;

document.getElementById('ans').textContent = nextPrime(num);