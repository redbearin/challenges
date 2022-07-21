interprime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // n not a prime
    if (n % i === 0) {
      let isPrimePlus, isPrimeMinus;
      for (let i = 0; i < Infinity; i++) {
        isPrimePlus = true;
        isPrimeMinus = true;
        for (let j = 2; j <= Math.sqrt(n + i); j++) {
          if ((n + i) % j === 0) {
            isPrimePlus = false;
            break;
          }
        }
        for (let j = 2; j <= Math.sqrt(n - i); j++) {
          if ((n - i) % j === 0) {
            if (isPrimePlus) {
              return JSON.stringify([]);
            }
            else {
              isPrimeMinus = false;
              break;
            }
          }
        }
        if(isPrimeMinus) {
          if (isPrimePlus) {  
            return JSON.stringify([n - i, n + i]);
          }
          return JSON.stringify([]);
        }
      }
    }
  }
  // n is a prime
  return JSON.stringify([]);
}
const n = 8;

document.getElementById('ans').textContent = interprime(n);