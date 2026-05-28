class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

const num1 = 10;
const num2 = 5;

const calculator = new Calculator();

document.getElementById('ans1').textContent = calculator.add(num1, num2);
document.getElementById('ans2').textContent = calculator.subtract(num1, num2);
document.getElementById('ans3').textContent = calculator.multiply(num1, num2);
document.getElementById('ans4').textContent = calculator.divide(num1, num2);
