seq = n => {
  return 3 * Math.pow(n, 2) / 2 - n / 2 + 1;
}

const n = 6;

document.getElementById('ans').textContent = seq(n);