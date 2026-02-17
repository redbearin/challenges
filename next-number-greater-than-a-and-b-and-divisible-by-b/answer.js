divisibleByB = (a, b) => {
  const max = Math.max(a + 1, b + 1);
  for (let i = max; i < Infinity; i++) {
    if (i % b === 0) {
      return i;
    }
  }
}

const a = 17;
const b = 8;

document.getElementById('ans').textContent = divisibleByB(a, b);