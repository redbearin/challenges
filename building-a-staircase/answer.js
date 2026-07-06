buildStaircase = (steps, sym) => {
  let sub;
  let stairs = [];
  for (let i = 0; i < steps; i++) {
    sub = [];
    for (let j = 0; j < steps; j++) {
      if (j <= i) {
        sub.push(sym);
      }
      else {
        sub.push('_');
      }
    }
    stairs.push(sub);
  }
  return JSON.stringify(stairs);
}

const steps = 3;
const sym = "#";


document.getElementById('ans').textContent = buildStaircase(steps, sym);

