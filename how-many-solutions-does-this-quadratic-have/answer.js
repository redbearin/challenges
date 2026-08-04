solutions = (a, b, c) => {
  if (b**2 - 4*a*c === 0) {
    return 1;
  }
  if (b**2 - 4*a*c > 0) {
    return 2;
  }
  return 0;
}

const a = 1;
const b = 0;
const c = -1;

document.getElementById('ans').textContent = solutions(a, b, c);

