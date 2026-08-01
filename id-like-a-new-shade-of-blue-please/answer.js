howManyWalls = (n, w, h) => Math.floor(n / (w * h));

const n = 41;
const w = 3;
const h = 6;

document.getElementById('ans').textContent = howManyWalls(n, w, h);