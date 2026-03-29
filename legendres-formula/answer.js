legendre = (p, n) => {
  if (p > n) {
    return 0;
  }
  let sum = 0;
  let fract = Infinity;
  let exp = 1;
  while (fract > 1) {
    fract = Math.floor(n/Math.pow(p, exp));
    sum += fract;
    exp++;
  }
  return sum;
}

const p = 5;
const n = 100;

document.getElementById('ans').textContent = legendre(p, n);