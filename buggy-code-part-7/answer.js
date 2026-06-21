swap = (a, b) => JSON.stringify([b, a]);

const a = 100;
const b = 200;

document.getElementById('ans').textContent = swap(a, b);
