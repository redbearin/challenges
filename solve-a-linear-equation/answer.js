solve = eqn => {
  const eqnArr = eqn.split(' ');
  console.log(eqnArr)
  if (eqnArr[1] === '-') {
    return +eqnArr[4] + +eqnArr[2];
  }
  return +eqnArr[4] - +eqnArr[2];
}

const eqn = "x - 9 = 10";

document.getElementById('ans').textContent = solve(eqn);