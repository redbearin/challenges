isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

const a = 4;
const b = 3;
const c = 8;

document.getElementById('ans').textContent = isTriangle(4, 3, 8);