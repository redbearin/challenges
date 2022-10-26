logarithm = (base, total) => {
  for (let i = 0; i < Infinity; i++) {
    if (Math.pow(base, i) === total)
      return i;
  }
}

const base = 2;

const total = 4;

document.getElementById('ans').textContent = logarithm(base, total); 
