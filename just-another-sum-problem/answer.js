justAnotherSumProblem = (n1, n2) => {
  console.log(n1)
  let big, small;
  if (n1 > n2) {
    big = n1;
    small = n2;
  } 
  else {
    big = n2;
    small = n1;
  }
  console.log(big)
  console.log(small)
  let sum = 0;
  for (let i = small; i <= big; i++) {
    sum += i;
  }
  return sum;
} 

const n1 = -20;
const n2 = 5;

document.getElementById('ans').textContent = justAnotherSumProblem(n1, n2);