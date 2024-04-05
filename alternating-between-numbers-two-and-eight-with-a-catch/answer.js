f = n => {
  return (n&1) ?
    2:
    8;
}
const n = 2;

document.getElementById('ans').textContent = f(n);