operation = (strNum1, strNum2, op) => {
  if (op === 'divide' && strNum2 === '0') {
    return 'undefined';
  }
  switch (op) {
    case 'add':
      return +strNum1 + +strNum2;
    case 'subtract':
      return +strNum1 - +strNum2;
    case 'divide':
      return +strNum1 / +strNum2;
    default:
      return +strNum1 * +strNum2;
  }
}

const strNum1 = "9";
const strNum2 = "0";
const op = "divide"

document.getElementById('ans').textContent = operation(strNum1, strNum2, op);
