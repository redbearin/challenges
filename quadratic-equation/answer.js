quadraticEquation = (a, b, c) => (-b + Math.sqrt(b**2 -4*a*c))/(2*a);

const a = 2;
const b = -7;
const c = 3;

document.getElementById('ans').textContent = quadraticEquation(a, b, c);