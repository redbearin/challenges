xor = (a, b) => {
  a = a^b;
  b = a^b;
  a = a^b;
  return JSON.stringify([a,b]);
}

const a = 10;
const b = 41;

document.getElementById('ans').textContent = xor(10, 41);