collatz = (num1, num2) => {
  let num1Ct = 0;
  let num2Ct = 0
  while (num1 !== 1) {
    num1Ct++;
    num1 % 2 ? 
      num1 = num1 * 3 + 1 :
      num1 = num1 / 2;
  }
  while (num2 !== 1) {
    num2Ct++;
    num2 % 2 ?
      num2 = num2 * 3 + 1 :
      num2 = num2 /2;
  }
  if (num2Ct < num1Ct) {
    return 'b';
  }
  return 'a';
}

const num1 = 10;
const num2 = 15;

document.getElementById('ans').textContent = collatz(num1, num2);