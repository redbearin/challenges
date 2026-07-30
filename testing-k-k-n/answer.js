kToK = (n, k) => Math.pow(k, k) === n;

const k = 9;
const n = 387420489;

document.getElementById('ans').textContent = kToK(n, k);