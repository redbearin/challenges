kineticEnergy = (m, v) => Math.round(m * v**2 / 2);

const m = 63.5;
const v = 7.35;

document.getElementById('ans').textContent = kineticEnergy(m, v);