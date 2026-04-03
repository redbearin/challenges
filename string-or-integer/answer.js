intOrString = param => Number.isInteger(param) ? "int" : "str";

const param = 9843532;

document.getElementById('ans').textContent = intOrString(param);