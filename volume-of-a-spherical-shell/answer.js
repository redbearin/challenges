volShell = (r1, r2) => {
  return Math.round(4 / 3 * Math.PI * Math.abs((Math.pow(r1, 3) - Math.pow(r2, 3))) * 1000)/1000;
}

const r1 = 3;
const r2 = 4;

document.getElementById('ans').textContent = volShell(r1, r2);