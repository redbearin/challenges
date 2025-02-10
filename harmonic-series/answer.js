harmonic = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1/i;
  }
  return Math.round(sum * 1000)/1000;
}

const n = 5;

document.getElementById('ans').textContent = harmonic(n);