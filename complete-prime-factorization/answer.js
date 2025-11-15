completeFactorization = num => {
  const factors = [];
  let divisor = 2;

  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return JSON.stringify(factors);
}


const num = 24;

document.getElementById('ans').textContent = completeFactorization(num);