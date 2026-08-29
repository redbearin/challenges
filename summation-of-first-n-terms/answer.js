summation = (eqn, limit) => {
  let sum = 0;
  for (let n = 1; n <= limit; n++) {
    sum += eval(eqn);
  }
  return Math.round(sum * 10)/10;
}

const eqn = "n";
const limit = 10;

document.getElementById('ans').textContent = summation(eqn, limit);