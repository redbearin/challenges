solve = (a, b) => {
  if (a-b === 0) {
    if (b - 3 * a + 4 === 0) {
      return "Any number";
    }
    return "No solution";
  }
  return Math.round((b - 3 * a + 4)/(a-b) * 1000)/1000;
}

const a = 1;
const b = 2;

document.getElementById('ans').textContent = solve(a, b);