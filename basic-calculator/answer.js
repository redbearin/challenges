calculator = (num1, op, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    // …
    case "/":
      if (num2 === 0) {
        return "Can't divide by 0!"
      }
      return num1 / num2;
    default:
      return num1 * num2;
  }
}

const num1 = 2;
const op = "/";
const num2 = 2;

document.getElementById('ans').textContent = calculator(num1, op, num2);

