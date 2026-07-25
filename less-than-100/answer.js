lessThan100 = (num1, num2) => {
  return num1 + num2 < 100;
}

const num1 = 3;
const num2 = 77;

document.getElementById('ans').textContent = lessThan100(num1, num2);