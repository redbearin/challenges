squaresSum = num => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i**2;
  }
  return total;
}

const num = 13;

document.getElementById('ans').textContent = squaresSum(num);