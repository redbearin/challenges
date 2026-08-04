operate = (n1, n2, op) => eval(n1 + op + n2);

const n1 = 1;
const n2 = 2;
const op = "+";

document.getElementById('ans').textContent = operate(n1, n2, op) 