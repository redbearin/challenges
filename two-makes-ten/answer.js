makesTen = (num1, num2) => num1 === 10 || num2 === 10 || num1 + num2 === 10;

const num1 = 9;
const num2 = 10;
document.getElementById('ans').textContent = makesTen(9, 10);