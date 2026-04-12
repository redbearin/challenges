derivative = (b, m) => {
  return b * Math.pow(m, b-1);
}

const b = 3;
const m = -2;

document.getElementById('ans').textContent = derivative(b, m);