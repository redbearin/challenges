format = (a, b, c) => `Their names were: ${a}, ${b} and ${c}.`;

const a = "John";
const b = "Joe";
const c = "Jack";

document.getElementById('ans').textContent = format(a, b, c);