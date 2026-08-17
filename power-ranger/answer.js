const powerRanger = (n, lower, upper) => {
  // min root for lower
  const base = Math.ceil(Math.pow(lower, 1/n));
  // max root for upper
  const top = Math.floor(Math.pow(upper, 1/n));
  // number of roots between upper and lower
  return Math.floor(top) - Math.ceil(base) + 1;
};

const n = 2;
const lower = 49;
const upper = 65;

document.getElementById('ans').textContent = powerRanger(n, lower, upper);