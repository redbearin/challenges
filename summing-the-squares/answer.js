squaresSum = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

const num = 3;

document.getElementById('ans').textContent = squaresSum(num);