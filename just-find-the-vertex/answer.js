findVertex = eqn => {
  eqn = eqn.replace(/ /g, '');
  const arr = eqn.split('x');
  return -arr[1] / (2 * (+arr[0]))
}

const eqn = "-5x + 50x -120";

document.getElementById('ans').textContent = findVertex(eqn);