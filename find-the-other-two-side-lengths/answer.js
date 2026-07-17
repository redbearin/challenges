otherSides = x => JSON.stringify([Math.round(2 * x * 100)/100, Math.round(x * Math.sqrt(3) * 100)/100]);

const x = 1;

document.getElementById('ans').textContent = otherSides(x);