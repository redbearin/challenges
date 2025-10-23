imposterFormula = (i, p) => Math.round(i/p * 100) + '%';

const i = 1;
const p = 8;

document.getElementById('ans').textContent = imposterFormula(i, p);
