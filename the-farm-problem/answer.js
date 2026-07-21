animals = (chickens, cows, pigs) => {
  return chickens * 2 + (cows + pigs) * 4;
}

const chickens = 2;
const cows = 3;
const pigs = 5;

document.getElementById('ans').textContent = animals(chickens, cows, pigs)