primesBelowNum = limit => {
  const primes = [2];
  let flag;
  for (let i = 3; i <= limit; i++) {
    flag = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      primes.push(i);
    }
  }
  return JSON.stringify(primes);
}

const limit = 10; 

document.getElementById('ans').textContent = primesBelowNum(limit);