memeSum = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  const dif = strNum1.length - strNum2.length;
  let sum = '';
  if (dif >= 0) {
    strNum2 = '0'.repeat(dif) + strNum2;
  }
  else {
    strNum1 = '0'.repeat(-dif) + strNum1;
  }
  for (let i = 0; i < strNum1.length; i++) {
    sum += (+strNum1[i] + +strNum2[i]).toString();
  }
  return +sum;
}

const num1 = 121;
const num2 = 81;

document.getElementById('ans').textContent = memeSum(num1, num2);


