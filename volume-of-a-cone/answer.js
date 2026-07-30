coneVolume = (h, r) => {
  return Math.round(Math.PI * Math.pow(r, 2) * h / 3 * 100) / 100;
}

const h = 3;
const r = 2;

document.getElementById('ans').textContent = coneVolume(h, r);

