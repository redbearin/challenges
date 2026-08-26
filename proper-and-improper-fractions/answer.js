// determine if number is a prime
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) 
      return false; 
  return true;
}
// determine how many proper fractions 
// there are up to a limit 
const properFractions = limit => {
  // the limit is 1
  // this will always generate
  // an improper fraction
  if (limit === 1)
    return 0;
  // create a list of all the primes
  // up to limit
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i))
      primes.push(i);
  }
  // keep track of all proper fractions
  // we know there is at least one because num
  // is > 1
  let numProperFrac = 1;
  let improper;
  // for each numerator up to limit
  // improper to see if there are 
  for (let numerator = 2; numerator <= limit; numerator++) {
    improper = false;
    // go prime number by prime number
    for (let idx = 0; idx < primes.length; idx++) {
      // both the limit (denominator)
      // and numerator are divisble by prime
      if (limit % primes[idx] === 0 && 
          numerator % primes[idx] === 0) {
        // set the flag saying an improper fraction
        // was found and exit loop
        improper = true;
        break;
      }
    }
    // did not find an improper fraction
    if (!improper)
      numProperFrac++;
  }
  return numProperFrac;
};

const limit = 25;

document.getElementById('ans').textContent = properFractions(limit);