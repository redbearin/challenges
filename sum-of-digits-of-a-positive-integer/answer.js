sumDigit = num => {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return sum;
}

const num = 111;

document.getElementById('ans').textContent = sumDigit(num);