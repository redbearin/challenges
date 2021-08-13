// determine if the number is a prime
const isPrime = num => {
  // go divisor by divisor
  // up to square root of input
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // divisor divides evenly
    // not a prime
    if (num % i === 0)
      return false;
  }
  // is a prime
  return true;
}
// find the product of the 
// n prime numbers
const primorial = n => {
  // number of prime numbers
  let count = 0;
  // product of prime numbers
  let product = 1;
  // go number by number from first prime
  // and check if number is prime
  // if so include it in the product
  for (let num = 2; num < Infinity; num++) {
    if (isPrime(num)) {
      count++;
      product *= num;
      // count has reached n
      if (count === n)
        return product
    }  
  }
}

const times = 8;

document.getElementById('ans').textContent = primorial(times);