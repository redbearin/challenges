integral = (b, m, n) => {
  return (b + 1) * 
         (Math.pow(n, b + 1) / (b + 1)  - Math.pow(m, b + 1) / (b + 1));
}

const b = 2;
const m = 4;
const n = 7;

document.getElementById('ans').textContent = integral(b, m, n);
