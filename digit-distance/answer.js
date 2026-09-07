digitDistance = (num1, num2) => {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  let sum = 0;

  for (let i = 0; i < num1Str.length; i++) {
    sum += +num2Str[i] - +num1Str[i];
  }
  return sum;
}

const num1 = 121;
const num2 = 599;

document.getElementById('ans').textContent = digitDistance(num1, num2);