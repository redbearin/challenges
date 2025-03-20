solveForExp = (a, b) => {
  for (let x = 0; x < Infinity; x++) {
    if (Math.pow(a, x) === b) {
      return x;
    }
  }
}

const a = 4;
const b = 1024;

document.getElementById('ans').textContent = solveForExp(a, b);