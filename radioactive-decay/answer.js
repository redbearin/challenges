halflifeCalculator = (mass, hlife, n) => JSON.stringify([mass/Math.pow(2, n),hlife * n]);

const mass = 1600;
const hlife = 6
const n = 3;

document.getElementById('ans').textContent = halflifeCalculator(mass, hlife, n);