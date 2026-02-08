height = s => Math.round(s * 10 * Math.sqrt(3)/ 2 * 10)/ 10 + ' mm';

const s = 6.2;

document.getElementById('ans').textContent = height(s);

