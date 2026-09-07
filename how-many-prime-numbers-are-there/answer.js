primeNumbers = num => {
  let count = 0;
  let isPrime;
  for (let i = 2; i <= num; i++) {
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
const num = 10;

document.getElementById('ans').textContent = primeNumbers(num);