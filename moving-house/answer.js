yearsInOneHouse = (age, moves) => Math.round(age/(moves + 1));

const age = 80;
const moves = 0;

document.getElementById('ans').textContent = yearsInOneHouse(80, 0);