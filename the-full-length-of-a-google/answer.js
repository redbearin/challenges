googlify = num => num > 1 ? "G" + 'o'.repeat(num) + 'gle' : 'invalid';

const num = 10;

document.getElementById('ans').textContent = googlify(num);