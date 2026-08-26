findFactors = num => {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return JSON.stringify(factors);
}

const num = 9;

document.getElementById('ans').textContent = findFactors(num);

