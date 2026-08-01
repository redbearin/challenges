area = (h, w) => h <= 0 || w <= 0 ? -1 : h * w;

const h = 3;
const w = 4;

document.getElementById('ans').textContent = area(h, w);