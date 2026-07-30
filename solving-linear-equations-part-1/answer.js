solve = (a, b) => {
  if (a === 1) {
    if (b === 1) {
      return "Any number";
    }
    return "No solution";
  }
  return Math.round((b - 1)/(a - 1) * 1000)/1000;
}

const a = 4;
const b = 7;

document.getElementById('ans').textContent =
solve(a, b);

