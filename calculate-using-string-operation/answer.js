calculate = (n1, n2, op) => eval(n1 + op + n2);

const n1 = 25;
const n2 = 5;
const op = "/";

document.getElementById('ans').textContent = calculate(n1, n2, op);