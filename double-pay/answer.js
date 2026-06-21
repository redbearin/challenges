doubledPay = num => {
  last = 1;
  let sum = 1;
  for (let i = 1; i < num; i++) {
    last = last * 2;
    sum += last;
  }
  return sum;
}


const num = 3;

document.getElementById('ans').textContent = doubledPay(num);