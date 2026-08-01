justAnotherSumProblem = (n1, n2) => {
  let sum = 0;
  let upper, lower;
  if (n1 > n2) {
    upper = n1;
    lower = n2;
  }
  else {
    lower = n1;
    upper = n2;
  }
  for (let i = lower; i <= upper; i++) {
    sum += i;
  }
  return sum;
}

const n1 = 45;
const n2 = 90;

document.getElementById('ans').textContent = justAnotherSumProblem(n1, n2);