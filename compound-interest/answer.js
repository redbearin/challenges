compoundInterest = (p, t, r, n) => {
  return Math.round(p * Math.pow(1+r/n, n*t) * 100)/100;
}

// principle
const p = 100;
// term
const t = 1;
// rate
const r = 0.05;
// compounding periods
const n = 1;

document.getElementById('ans').textContent = compoundInterest(p, t, r, n); 