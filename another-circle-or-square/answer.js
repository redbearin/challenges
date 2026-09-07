circle_or_square = (r, a) => (2 * 3.14 * r) > (4 * Math.sqrt(a)) ? true : false;

const r = 5;
const a = 100;

document.getElementById('ans').textContent = circle_or_square(r, a);