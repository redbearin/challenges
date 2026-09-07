primalStrength = n => {
  let num, upperIsPrime, lowerIsPrime;
  for (let i = 1; i < Infinity; i++) {
    upperIsPrime = true;
    lowerIsPrime = true;
    num = n + i;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0)
        upperIsPrime = false;
    }
    // prime in positive direction
    if (upperIsPrime) {
      num = n - i;
      for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0)
          lowerIsPrime = false;
      }
      // prime in both directions
      if (lowerIsPrime)
        return 'Balanced';
      // prime positive direction only
      else 
        return 'Strong';
    }
    num = n - i;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0)
        lowerIsPrime = false;
    }
    // prime negative direction only
    if (lowerIsPrime)
      return 'Weak';
  }
}

const n = 19;

document.getElementById('ans').textContent = primalStrength(n);