intOrString = n => Number.isInteger(n) ? "int" : "str";

const n = 8;

document.getElementById('ans').textContent = intOrString(n);