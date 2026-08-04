volPizza = (r, h) => Math.round(r * Math.PI * h);

const r = 1;
const h = 1;

document.getElementById('ans').textContent = volPizza(r, h);