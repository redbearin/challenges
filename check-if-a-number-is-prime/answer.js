isPrime = num => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num/2; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

const num = 31;

document.getElementById('ans').textContent = isPrime(num);